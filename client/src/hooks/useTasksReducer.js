import { useReducer, useState } from 'react'
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  patchDoneRequest,
  updateTaskRequest
} from '../api/tasks.api'
import {
  TASKS_ACTIONS,
  initialTasksState,
  taskReducer
} from '../reducers/tasksReducer'

export function useTasksReducer () {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasksState)
  const [error, setError] = useState('')

  const createTask = async task => {
    try {
      await createTaskRequest(task)
    } catch (error) {
      console.error('error createTaskRequest :>> ', error)
      setError(error.response.data.message)
    }
  }
  const getTask = async id => {
    try {
      const { data: task } = await getTaskRequest(id)
      return task
    } catch (error) {
      console.error('error getTaskRequest :>> ', error)
      setError(error.response.data.message)
    }
  }

  const getTasks = async () => {
    try {
      const { data: tasks } = await getTasksRequest()
      return dispatch({ type: TASKS_ACTIONS.READ_TASKS, payload: { tasks } })
    } catch (error) {
      console.error('getTasksRequest :>> ', error)
      setError(error.response.data.message)
    }
  }
  const updateTask = async (id, newFields) => {
    try {
      await updateTaskRequest(id, newFields)
    } catch (error) {
      console.error(`error updateTask/${id} :>> `, error)
      setError(error.response.data.message)
    }
  }
  const patchDoneTask = async (id, done) => {
    try {
      const res = await patchDoneRequest(id, done)
      console.log('patchDoneRequest :>> ', res)
      return dispatch({
        type: TASKS_ACTIONS.PATCH_DONE_TASK,
        payload: { id, done }
      })
    } catch (error) {
      console.log('patchDoneRequest :>> ', error)
      setError(error.response.data.message)
    }
  }

  const deleteTask = async id => {
    try {
      await deleteTaskRequest(id)
      return dispatch({ type: TASKS_ACTIONS.DELETE_TASK, payload: { id } })
    } catch (error) {
      console.error('deleteTaskRequest :>> ', error)
      setError(error.response.data.message)
    }
  }

  return {
    error,
    tasks,
    createTask,
    getTask,
    getTasks,
    updateTask,
    patchDoneTask,
    deleteTask
  }
}
