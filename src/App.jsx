import React, { useContext } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DailyTodos from './pages/DailyTodos'
import WeeklyTodos from './pages/WeeklyTodos'
import MonthlyTodos from './pages/MonthlyTodos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DailyTodos />}></Route>
          <Route path="/weekly-todos" element={<WeeklyTodos />}></Route>
          <Route path="/monthly-todos" element={<MonthlyTodos />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
