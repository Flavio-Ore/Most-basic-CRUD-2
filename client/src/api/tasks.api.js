import axios from './axios.js'
export const createTaskRequest = async task => await axios.post('/tasks', task)
