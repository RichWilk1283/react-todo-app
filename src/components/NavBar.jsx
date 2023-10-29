import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className='bg-black p-4 w-full text-white flex gap-3 items-center'>
      <Link to="/">Home</Link>
      <Link to="/daily-todos">Daily</Link>
      <Link to="/weekly-todos">Weekly</Link>
      <Link to="/monthly-todos">Monthly</Link>
    </header>
  )
}
