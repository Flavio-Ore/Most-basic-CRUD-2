import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createTaskRequest } from '../api/tasks.api'

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    try {
      console.log('data :>> ', data)
      const task = await createTaskRequest(data)
      console.log('task :>> ', task)
      reset()
    } catch (error) {
      console.log('error createTaskRequest :>> ', error)
    }
  })

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h2 className='text-2xl font-bold mb-4'>Edit task:</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          placeholder='Title'
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <label htmlFor='description'>Description</label>
        <textarea
          rows='3'
          placeholder='Description...'
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  )
}

export default TaskFormPage
