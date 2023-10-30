import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center my-3 gap-1">
        <h1 className="bg-blue-800 rounded-full px-5 py-2 text-3xl md:text-6xl md:px-7 md:py-4">To Do List</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
