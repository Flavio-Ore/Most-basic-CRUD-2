import { createContext, useState } from 'react'
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  patchDoneRequest,
  updateTaskRequest
} from '../api/tasks.api'

export const TaskContext = createContext()

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')
  const getTask = async id => {
    try {
      const { data } = await getTaskRequest(id)
      console.log(`getTask/${id} :>> `, data)
      return data
    } catch (error) {
      console.error(`getTask/${id} :>> `, error)
      setError(error.response.data.message)
    }
  }

  const getTasks = async () => {
    try {
      const { data } = await getTasksRequest()
      setTasks(data)
    } catch (error) {
      console.error('getTasks :>> ', error)
      setError(error.response.data.message)
    }
  }

  const createTask = async task => {
    try {
      console.log('data :>> ', task)
      const res = await createTaskRequest(task)
      console.log('createTask :>> ', res)
    } catch (error) {
      console.error('error createTaskRequest :>> ', error)
      setError(error.response.data.message)
    }
  }

  const updateTask = async (id, newFields) => {
    try {
      const res = await updateTaskRequest(id, newFields)
      console.log('updateTaskRequest :>> ', res)
      return res.data
    } catch (error) {
      console.error(`error updateTask/${id} :>> `, error)
      setError(error.response.data.message)
    }
  }

  const deleteTask = async id => {
    try {
      await deleteTaskRequest(id)
    } catch (error) {
      console.error('deleteTaskRequest :>> ', error)
      setError(error.response.data.message)
    }
  }

  const patchDoneTask = async (id, done) => {
    console.log('done :>> ', done)
    try {
      const taskToPatch = tasks.find(task => task.id === id)
      const res = await patchDoneRequest(id, done)

      console.log('patchDoneRequest :>> ', res)
      const updatedTask = { ...taskToPatch, done }
      const newTasks = tasks.map(task =>
        task.id === id ? { ...taskToPatch, done } : task
      )
      console.log('updatedTask :>> ', updatedTask)
      setTasks(newTasks)
    } catch (error) {
      console.error('patchDoneTask :>> ', error)
      setError(error.response.data.message)
    }
  }

  const taskContextValues = {
    tasks,
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    patchDoneTask,
    error
  }

  return (
    <TaskContext.Provider value={taskContextValues}>
      {children}
    </TaskContext.Provider>
  )
}
