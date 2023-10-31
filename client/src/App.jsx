import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { TaskProvider } from './contexts/TaskContext'
import NotFoundPage from './pages/NotFoundPage'
import TaskFormPage from './pages/TaskFormPage'
import TasksPage from './pages/TasksPage'

function App () {
  return (
    <main className='bg-zinc-900 h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='container mx-auto py-4 px-20'>
          <TaskProvider>
            <Routes>
              <Route path='/' element={<TasksPage />} />
              <Route path='/new' element={<TaskFormPage />} />
              <Route path='/edit/:id' element={<TaskFormPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </TaskProvider>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
