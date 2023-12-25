import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Hii!!! my name is Sandeepa Oraon</h1>

      <nav>
        <Link to='/' className='nav-link'>home</Link>
        <Link to='/projects' className='nav-link'>projects</Link>
        <Link to='/follow-me' className='nav-link'>follow me</Link>
        <Link to='/lets-talk' className='nav-link'>lets talk!</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={'/Home'} / >
      </Routes>
    </>
  )
}

export default App
