import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h1>MySQL + Express + React + NodeJS + </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new'>New Task</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
