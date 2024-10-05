import apiClient from "../utils/apiClient.js";

class KanbanBoardApi {
  constructor() {}

  getAllTasks() {
    return apiClient.get("/tasks");
  }

  getTaskById(taskId) {
    return apiClient.get(`/tasks/${taskId}`);
  }

  createNewTask(newTask) {
    console.log("called create new task");

    return apiClient.post("/tasks", newTask);
  }

  updateTask(taskId, updatedTask) {
    return apiClient.put(`/tasks/${taskId}`, updatedTask);
  }

  updateBulkTasks(updateTasks) {
    return apiClient.put(`/tasks/bulk-update`, updateTasks);
  }

  deleteTask(taskId) {
    return apiClient.delete(`/tasks/${taskId}`);
  }
}

export default new KanbanBoardApi();
