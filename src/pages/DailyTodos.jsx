import React from 'react'
import DailyContextProvider from '../../contexts/DailyContextProvider'
import Summary from '../components/Summary'
import TaskForm from '../components/TaskForm'
import WaitingCard from '../components/WaitingCard'
import InProgressCard from '../components/InProgressCard'
import DoneCard from '../components/DoneCard'
import DailyContext from '../../contexts/DailyContext';

export default function DailyTodos() {

  return (
    <DailyContextProvider>
      <div>
        <h2 className="text-center w-1/2 mx-auto text-2xl md:text-4xl font-semibold">For today:</h2>
        <Summary context={DailyContext} />
        <TaskForm context={DailyContext} />
        <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
          <WaitingCard context={DailyContext} />
          <InProgressCard context={DailyContext} />
          <DoneCard context={DailyContext} />
        </div>
      </div>
    </DailyContextProvider>
  )
}
