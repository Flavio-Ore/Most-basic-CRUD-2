import axios from './axios.js'
export const getTaskRequest = async id => await axios.get(`/tasks/${id}`)
export const getTasksRequest = async () => await axios.get('/tasks')
export const createTaskRequest = async task => await axios.post('/tasks', task)
export const deleteTaskRequest = async id => await axios.delete(`/tasks/${id}`)
export const updateTaskRequest = async (id, task) =>
  await axios.put(`/tasks/${id}`, task)
export const patchDoneRequest = async (id, done) =>
  await axios.patch(`/tasks/${id}`, { done })
