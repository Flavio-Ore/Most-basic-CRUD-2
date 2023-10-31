import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'

const TaskFormPage = () => {
  const { error, createTask, getTask, updateTask } = useTasks()
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm()
  const params = useParams()
  console.log('params :>> ', params)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) return navigate('*')

    if (params.id) {
      getTask(params.id).then(data => {
        setValue('title', data.title)
        setValue('description', data.description)
      })
    }
  }, [error])

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data)
    }
    navigate('/')
    reset()
  })

  return (
    <div className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
      <h2 className='text-2xl font-bold mb-4text-xl uppercase text-center'>
        {params.id ? 'Edit task' : 'Create task'}
      </h2>
      <form onSubmit={onSubmit}>
        <label className='block' htmlFor='title'>
          Title
        </label>
        <input
          type='text'
          placeholder='Walk the dog...'
          {...register('title', { required: true })}
          className='px-2 py-1 rounded-sm w-full'
          autoFocus
        />
        <label className='block' htmlFor='description'>
          Description
        </label>
        <textarea
          rows='3'
          placeholder='Shopping...'
          {...register('description')}
          className='px-2 py-1 rounded-sm w-full'
        />
        <button
          className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  )
}

export default TaskFormPage
