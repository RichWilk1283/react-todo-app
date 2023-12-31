import React, { useContext } from 'react'

function Summary({context}) {

  const {waitingCount, inProgressCount, doneCount} = useContext(context);

  return (
    <div className="flex flex-col items-center my-3 gap-1">
      <p className="text-sm">You currently have <span className="text-amber-400 font-bold">{waitingCount}</span> tasks waiting to be started</p>
      <p className="text-sm">You currently have started <span className="text-green-400 font-bold">{inProgressCount}</span> tasks</p>
      <p className="text-sm">You currently have <span className="text-red-400 font-bold">{doneCount}</span> tasks completed</p>
    </div>
  )
}

export default Summary