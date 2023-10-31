import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'

// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, title, description, done, createdAt }) => {
  const { deleteTask, patchDoneTask } = useTasks()

  const handleDelete = () => {
    deleteTask(id)
  }
  const handleDone = () => {
    const isDone = done === 1 ? 0 : 1
    patchDoneTask(id, isDone)
  }
  return (
    <article className='bg-zinc-700 text-white rounded-md p-4 '>
      <header className='flex justify-between'>
        <h3 className='text-sm font-bold'>{title}</h3>
        <button
          className='bg-neutral-900 rounded-lg p-2 hover:bg-zinc-600'
          onClick={handleDone}
        >
          {done === 1 ? '✔' : '❌'}
        </button>
      </header>
      <p className='my-2'>{description}</p>
      <span className='text-slate-300 my-2'>
        <small>{new Date(createdAt).toLocaleString()}</small>
      </span>
      <div className='flex justify-evenly items-center my-2'>
        <button
          className='bg-red-500 py-1 px-2 rounded-md text-slate-200 hover:text-red-700'
          onClick={handleDelete}
        >
          Delete
        </button>
        <Link
          className='bg-blue-500 py-1 px-2 rounded-md text-slate-200 hover:text-blue-700'
          to={`/edit/${id}`}
        >
          Edit
        </Link>
      </div>
    </article>
  )
}

export default TaskCard
