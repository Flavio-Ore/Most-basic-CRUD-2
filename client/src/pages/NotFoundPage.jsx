import { useTasks } from '../hooks/useTasks'

const NotFoundPage = () => {
  const { error } = useTasks()
  return (
    <div>
      <h2>Page not found 404</h2>
      <p>{error}</p>
    </div>
  )
}

export default NotFoundPage
