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
    return apiClient.post("/tasks", newTask);
  }

  updateTask(taskId, updatedTask) {
    return apiClient.put(`/tasks/${taskId}`, updatedTask);
  }

  // updateTaskHierarchy(taskId, updatedTask){
  //   return axios.put(/update-hierarchy/${taskId}`, updatedTask);

  // }

  updateBulkTasks(updateTasks) {
    return apiClient.put(`/tasks/bulk-update`, updateTasks);
  }

  deleteTask(taskId) {
    return apiClient.delete(`/tasks/${taskId}`);
  }
}

export default new KanbanBoardApi();
