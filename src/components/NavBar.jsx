import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="bg-black/60 p-4 w-full text-white flex gap-3 justify-center rounded-b-md">
      <Link className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white" to="/">Daily</Link>
      <Link className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white" to="/weekly-todos">Weekly</Link>
      <Link className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white" to="/monthly-todos">Monthly</Link>
    </header>
  )
}
