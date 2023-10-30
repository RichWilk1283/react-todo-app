import React from 'react'
import Summary from '../components/Summary'
import TaskForm from '../components/TaskForm'
import WaitingCard from '../components/WaitingCard'
import InProgressCard from '../components/InProgressCard'
import DoneCard from '../components/DoneCard'
import MonthlyContextProvider from '../../contexts/MonthlyContextProvider'
import MonthlyContext from '../../contexts/MonthlyContext'


export default function MonthlyTodos() {

  return (
    <MonthlyContextProvider>
      <div>
        <h2 className="text-center w-1/2 mx-auto text-2xl md:text-4xl font-semibold">For this month:</h2>
        <Summary context={MonthlyContext} />
        <TaskForm context={MonthlyContext} />
        <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
          <WaitingCard context={MonthlyContext} />
          <InProgressCard context={MonthlyContext} />
          <DoneCard context={MonthlyContext} />
        </div>
      </div>
    </MonthlyContextProvider>
  )
}
