import { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTasks } from '../hooks/useTasks'

const TasksPage = () => {
  const { tasks, getTasks } = useTasks()
  useEffect(() => {
    getTasks()
    console.log('tasks updated :>> ', tasks)
  }, [])

  return (
    <div>
      <h2 className='text-5xl text-white font-bold text-center my-2'>Tasks</h2>
      <div className='grid grid-cols-3 gap-2'>
        {tasks.length === 0 ? (
          <h2>No tasks yet.</h2>
        ) : (
          tasks.map(({ id, ...task }) => (
            <TaskCard key={id} id={id} {...task} />
          ))
        )}
      </div>
    </div>
  )
}

export default TasksPage
