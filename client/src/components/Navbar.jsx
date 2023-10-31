import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-neutral-800 flex justify-between px-20 py-4'>
      <h1 className='text-white font-bold'>MySQL + Express + React + NodeJS</h1>
      <nav>
        <ul className='flex gap-x-1'>
          <li>
            <Link
              className='bg-green-500 text-slate-200 px-2 py-1 rounded-md hover:text-green-700'
              to='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='bg-green-500 text-slate-200 px-2 py-1 rounded-md hover:text-green-700'
              to='/new'
            >
              New Task
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
