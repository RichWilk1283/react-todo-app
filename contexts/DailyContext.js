import { createContext } from "react";

const DailyContext = createContext({
  waitingTodos: [],
  setWaitingTodos: () => {},
  inProgressTodos: [],
  setInProgressTodos: () => {},
  doneTodos: [],
  setDoneTodos: () => {},

  waitingCount: 0,
  setWaitingCount: () => {},
  inProgressCount: 0,
  setInProgressCount: () => {},
  doneCount: 0,
  setDoneCount: () => {},
})

export default DailyContext