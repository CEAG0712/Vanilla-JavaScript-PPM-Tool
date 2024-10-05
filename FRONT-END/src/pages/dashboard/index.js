import KanbanBoardApi from "../../services/KanbanBoardApi.js";
import { COLUMN_STATUS } from "../../utils/constants.js";

//Responsible for managing logic for the task list
class Dashboard {
  constructor() {
    this.todoList = document.querySelector("#todoList");
    this.inProgressList = document.querySelector("#inProgressList");
    this.doneList = document.querySelector("#doneList");
    this.taskList = [];
    this.draggedItems = document.getElementsByClassName("draggableItem");
    this.listColumns = document.querySelectorAll(".drag-item-list");
    this.createForm = document.querySelector("#newTaskForm");
    this.updateForm = document.querySelector("#updateForm");

    this.draggedItem = `<li></li>`;
    // this.currentColumn;
    this.dragging = false;
    this.getAllTasksFromApi();
  }

  addCreateFormSubmitEventListener() {
    this.createForm.addEventListener(
      "submit",
      this.onSubmitCreateForm.bind(this)
    );
  }

  async onSubmitCreateForm(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    console.log("onSubmitCreateForm called");

    if (!this.createForm.taskSummary.value) {
      alert("Task Summary is a required field");
      return;
    }

    if (this.createForm.status.value === "") {
      this.createForm.status.value = "TO_DO";
    }

    const task = {
      taskSummary: this.createForm.taskSummary.value,
      acceptanceCriteria: this.createForm.acceptanceCriteria.value,
      status: this.createForm.status.value,
    };

    await KanbanBoardApi.createNewTask(task);
    await this.getAllTasksFromApi();
    this.clearFieldsAfterSubmit();
  }

  clearFieldsAfterSubmit() {
    (this.createForm.taskSummary.value = ""),
      (this.createForm.acceptanceCriteria.value = ""),
      (this.createForm.status.value = "");
  }

  async getAllTasksFromApi() {
    try {
      const res = await KanbanBoardApi.getAllTasks();
      this.taskList = this.checkBackend(res);
    } catch (error) {
      console.log(error);
    }
    this.render();
  }

  viewUpdateEventListener() {
    this.todoList.addEventListener("click", (event) => {
      this.renderViewUpdateForm(event, this.updateForm);
    });

    this.inProgressList.addEventListener("click", (event) => {
      this.renderViewUpdateForm(event, this.updateForm);
    });

    this.doneList.addEventListener("click", (event) => {
      this.renderViewUpdateForm(event, this.updateForm);
    });
  }

  async renderViewUpdateForm(event) {
    if (event.target.classList.contains("view-button")) {
      event.stopImmediatePropagation();
      const taskId = event.target.parentElement.dataset.id;
      const taskToUpdate = await KanbanBoardApi.getTaskById(taskId);
      console.log("taskToUpdate ", taskToUpdate.data.data);

      this.renderViewUpdateTaskForm(taskToUpdate);

      this.updateForm.addEventListener(
        "submit",
        this.onUpdateSubmit.bind(this)
      );
    }
  }

  renderViewUpdateTaskForm = (taskToUpdate) => {
    taskToUpdate = this.checkBackend(taskToUpdate);
    this.updateForm.taskSummary.value = taskToUpdate.taskSummary;
    this.updateForm.acceptanceCriteria.value = taskToUpdate.acceptanceCriteria;
    this.updateForm.status.value = taskToUpdate.status;
    this.updateForm._id.value = taskToUpdate._id;
  };

  async onUpdateSubmit(event) {
    event.preventDefault();

    if (!this.updateForm.taskSummary.value) {
      alert("Task Summary is a required field");
      return;
    }

    const task = {
      taskSummary: this.updateForm.taskSummary.value,
      acceptanceCriteria: this.updateForm.acceptanceCriteria.value,
      status: this.updateForm.status.value,
    };

    const taskId = this.updateForm._id.value;

    await KanbanBoardApi.updateTask(taskId, task);
    this.getAllTasksFromApi();
  }

  deleteTaskOnClick(event) {
    if (event.target.classList.contains("btn-danger")) {
      event.stopImmediatePropagation();
      const taskId = event.target.parentElement.dataset.id;
      this.onDelete(taskId);
    }
  }
  deleteEventListener() {
    this.todoList.addEventListener("click", (event) => {
      this.deleteTaskOnClick(event);
    });

    this.inProgressList.addEventListener("click", (event) => {
      this.deleteTaskOnClick(event);
    });

    this.doneList.addEventListener("click", (event) => {
      this.deleteTaskOnClick(event);
    });
  }

  async onDelete(taskId) {
    if (
      window.confirm(
        `You are deleting project task ${taskId}, this action cannot be undone`
      )
    )
      try {
        await KanbanBoardApi.deleteTask(taskId);
        await this.getAllTasksFromApi();
      } catch (error) {
        alert("Unable to delete the task at this time");
      }
  }

  checkBackend = (res) => {
    let data;

    if (!res.data.data) {
      data = res.data; // response from Spring Boot
    } else {
      data = res.data.data; // Response from NodeJS
    }

    return data;
  };

  createTaskList = () => {
    // console.log("createTaskList called");

    let columns = [
      { status: COLUMN_STATUS.TO_DO_STATUS, tag: this.todoList },
      { status: COLUMN_STATUS.IN_PROGRESS_STATUS, tag: this.inProgressList },
      { status: COLUMN_STATUS.DONE_STATUS, tag: this.doneList },
    ];

    columns.forEach((item) => {
      let sortedListItemsByHierarchy = this.taskList
        .filter((el) => el.status === item.status) // Filter tasks by status
        .sort((a, b) => a.hierarchy - b.hierarchy); // Sort by hierarchy in ascending order

      // console.log("item.tag ", item?.tag);
      // console.log("sortedListItemsByHierarchy ", sortedListItemsByHierarchy);

      if (item?.tag) {
        item.tag.innerHTML = sortedListItemsByHierarchy
          .map((task) => {
            const taskHTML = this.createTaskCard(task);

            return taskHTML;
          })
          .join("");
      }
    });
  };

  createTaskCard = (task) => {
    const taskHTML = `
          <li draggable="true"  class="draggableItem">
           <div class="card project-task">
               <h5 class="card-header">Task ID: ${task._id}</h5>
  
               <div class="card-body" data-id="${task._id}">
                 <h5 class="card-title">${task.taskSummary}</h5>
                 <a href="" type="button"
          class="btn btn-primary view-button"
          data-bs-toggle="modal"
          data-bs-target="#viewUpdateTaskModal">View / Update</a>
                 <button class="btn btn-danger">Delete</button>
               </div>
  
             </div>
           </li> 
     
     `;
    return taskHTML;
  };

  updateTaskOnBoard = (updatedTask) => {
    this.getAllTasksFromApi();
  };

  dragEventListener() {
    Array.from(this.draggedItems).map((index) =>
      index.addEventListener("dragstart", (event) => {
        this.dragTask(event);
      })
    );
  }

  dragTask = (event) => {
    if (event.target.classList.contains("draggableItem")) {
      event.stopImmediatePropagation();
      this.draggedItem = event.target;
      this.draggedItem.classList.add("dragging");

      this.dragging = true;
    }
  };

  allowDropEventListener() {
    this.listColumns.forEach((list) => {
      list.addEventListener("dragover", (event) => this.allowDrop(event));
      list.addEventListener("dragenter", (event) => this.dragEnter(list));
      list.addEventListener("drop", (event) => this.drop(event, list));
    });
  }

  //Columns Allow for items to drop
  allowDrop = (event) => {
    event.preventDefault();
  };

  dragEnter(list) {
    this.currentColumn = list;
  }

  //Dropping Item in Column

  drop = async (event, list) => {
    event.preventDefault();
    if (!this.dragging) return;

    //if list is empty
    const afterElement = this.getDragAfterElements(list, event.clientY);
    if (!afterElement) {
      list.appendChild(this.draggedItem);
    } else {
      list.insertBefore(this.draggedItem, afterElement);
    }

    this.dragging = false;
    this.draggedItem.classList.remove("dragging");

    const taskId = this.draggedItem.querySelector(".card-body").dataset.id;
    const listIdToStatusMap = {
      todoList: "TO_DO",
      inProgressList: "IN_PROGRESS",
      doneList: "DONE",
    };

    const statusToListIdMap = {
      TO_DO: "todoList",
      IN_PROGRESS: "inProgressList",
      DONE: "doneList",
    };

    await this.arrangeNewHierarchyInNewColumn(event, listIdToStatusMap, list);
    // Rearrange tasks in previous list
    await this.arrangeNewHierarchyInPreviousColumn(taskId, statusToListIdMap);
  };

  getDragAfterElements = (list, y) => {
    let draggableElements = [
      ...list.querySelectorAll(".draggableItem:not(.dragging)"),
    ];
    console.log("draggableElements", draggableElements, "Y", y);

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        console.log("offset", offset);

        if (offset < 0 && offset > closest.offset) {
          return {
            offset,
            element: child,
          };
        } else return closest;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  reArrangeTasks = (list) => {
    let updatedTasks = [];
    let taskInColumn = Array.from(list.children);

    taskInColumn.forEach((task, index) => {
      let taskId = task.querySelector(".card-body").dataset.id;
      let currentTask = this.taskList.find((el) => el._id === taskId);
      currentTask.hierarchy = index + 1;
      updatedTasks.push(currentTask);
    });

    return updatedTasks;
  };

  async arrangeNewHierarchyInPreviousColumn(taskId, statusToListIdMap) {
    const task = this.taskList.find((el) => el._id === taskId);
    const previousList = document.getElementById(
      statusToListIdMap[task.status]
    );
    const updatedPreviousTasks = this.reArrangeTasks(previousList);

    if (updatedPreviousTasks.length)
      try {
        await KanbanBoardApi.updateBulkTasks({ tasks: updatedPreviousTasks });
      } catch (error) {
        console.error("Failed to update previous list tasks:", error);
      }
  }

  async arrangeNewHierarchyInNewColumn(event, listIdToStatusMap, list) {
    const listId =
      event.target.id || event.target.closest(".drag-item-list").id;
    const newStatus = listIdToStatusMap[listId];

    const updatedTask = this.reArrangeTasks(list);

    try {
      await KanbanBoardApi.updateBulkTasks({
        tasks: updatedTask.map((task) => ({ ...task, status: newStatus })),
      });
      console.log(`Tasks updated successfully`);
    } catch (error) {
      console.error("Failed to update tasks:", error);
    }
  }

  render() {
    this.createTaskList();
    this.allowDropEventListener();
    this.dragEventListener();
    this.deleteEventListener();
    this.addCreateFormSubmitEventListener();
    this.viewUpdateEventListener();
  }
}

export default Dashboard;
