import React, { useContext } from 'react'
import './App.css'
import WaitingCard from './components/WaitingCard'
import InProgressCard from './components/InProgressCard'
import DoneCard from './components/DoneCard'
import DailyContextProvider from '../contexts/DailyContextProvider'
import TaskForm from './components/TaskForm'
import Summary from './components/Summary'

function App() {
  return (
    <DailyContextProvider>
      <div>
        <Summary />
        <TaskForm />
        <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
          <WaitingCard />
          <InProgressCard />
          <DoneCard />
        </div>
      </div>
    </DailyContextProvider>
  )
}

export default App
