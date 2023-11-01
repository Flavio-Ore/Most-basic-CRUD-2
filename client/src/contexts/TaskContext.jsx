import { createContext } from 'react'
import { useTasksReducer } from '../hooks/useTasksReducer'

export const TaskContext = createContext()

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const {
    createTask,
    deleteTask,
    error,
    getTask,
    getTasks,
    patchDoneTask,
    tasks,
    updateTask
  } = useTasksReducer()

  const taskContextValues = {
    tasks,
    createTask,
    getTask, // <-
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
