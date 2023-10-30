import React, { useState } from 'react'
import WeeklyContext from './WeeklyContext';

export default function WeeklyContextProvider({ children }) {

  const [waitingCount, setWaitingCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const [waitingTodos, setWaitingTodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const [task, setTask] = useState("")

  return (
    <WeeklyContext.Provider value={{
      waitingTodos,
      setWaitingTodos,
      inProgressTodos,
      setInProgressTodos,
      doneTodos,
      setDoneTodos,

      waitingCount,
      setWaitingCount,
      inProgressCount,
      setInProgressCount,
      doneCount,
      setDoneCount,

      task,
      setTask
    }}>
      {children}
    </WeeklyContext.Provider>
  )
}
