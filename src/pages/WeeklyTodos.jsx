import React from 'react'
import WeeklyContextProvider from '../../contexts/WeeklyContextProvider'
import Summary from '../components/Summary'
import TaskForm from '../components/TaskForm'
import WaitingCard from '../components/WaitingCard'
import InProgressCard from '../components/InProgressCard'
import DoneCard from '../components/DoneCard'
import WeeklyContext from '../../contexts/WeeklyContext'

export default function WeeklyTodos() {

  return (
    <WeeklyContextProvider>
      <div>
        <h2 className="text-center w-1/2 mx-auto text-2xl md:text-4xl font-semibold">For this week:</h2>
        <Summary context={WeeklyContext} />
        <TaskForm context={WeeklyContext} />
        <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
          <WaitingCard context={WeeklyContext} />
          <InProgressCard context={WeeklyContext} />
          <DoneCard context={WeeklyContext} />
        </div>
      </div>
    </WeeklyContextProvider>
  )
}
