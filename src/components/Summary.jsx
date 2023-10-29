import React, { useContext } from 'react'
import DailyContext from '../../contexts/DailyContext';

function Summary() {

  const {waitingCount, inProgressCount, doneCount} = useContext(DailyContext);

  return (
    <div className="flex flex-col items-center my-3 gap-1">
      <h1 className="bg-blue-800 rounded-full px-5 py-2 text-3xl md:text-6xl md:px-7 md:py-4">Todays to do's</h1>
      <p className="text-sm">You currently have <span className="text-amber-400 font-bold">{waitingCount}</span> tasks waiting to be started</p>
      <p className="text-sm">You currently have started <span className="text-green-400 font-bold">{inProgressCount}</span> tasks</p>
      <p className="text-sm">You currently have <span className="text-red-400 font-bold">{doneCount}</span> tasks completed</p>
    </div>
  )
}

export default Summary