import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

export function useTasks () {
  const taskContext = useContext(TaskContext)

  if (taskContext == null) {
    throw new Error('useTasks must be used within a TaskProvider')
  }

  return {
    tasks: taskContext.tasks,
    getTask: taskContext.getTask,
    getTasks: taskContext.getTasks,
    patchDoneTask: taskContext.patchDoneTask,
    updateTask: taskContext.updateTask,
    createTask: taskContext.createTask,
    deleteTask: taskContext.deleteTask,
    error: taskContext.error
  }
}
