export const initialTasksState = []
export const TASKS_ACTIONS = {
  READ_TASKS: 'READ_TASKS',
  PATCH_DONE_TASK: 'PATCH_DONE_TASK',
  DELETE_TASK: 'DELETE_TASK'
}
export function taskReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action
  if (actionType === TASKS_ACTIONS.READ_TASKS) {
    const { tasks } = actionPayload
    return tasks
  }

  if (actionType === TASKS_ACTIONS.PATCH_DONE_TASK) {
    const { id, done } = actionPayload
    const taskToPatch = state.find(task => task.id === id)

    return state.map(task => (task.id === id ? { ...taskToPatch, done } : task))
  }

  if (actionType === TASKS_ACTIONS.DELETE_TASK) {
    const { id } = actionPayload
    return state.filter(task => task.id !== id)
  }

  return state
}
