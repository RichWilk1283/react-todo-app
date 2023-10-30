import React, { useContext } from 'react';
import { ArrowDownCircleIcon, ArrowUpCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import DailyContext from '../../contexts/DailyContext';

function InProgressCard({context}) {

  const {
    waitingTodos,
    setWaitingTodos,
    inProgressTodos,
    setInProgressTodos,
    setWaitingCount,
    setInProgressCount,
    doneTodos,
    setDoneTodos,
    setDoneCount
  } = useContext(context);

  function downGradeAInProgressTask(inProgressTask) {
    const newWaitingTodos = [...waitingTodos, inProgressTask];
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  function addDoneTodo(inProgressTask) {
    const newDoneTodos = [...doneTodos, inProgressTask];
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setDoneTodos(newDoneTodos);
    setDoneCount(newDoneTodos.length);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  function deleteInProgressTodo(inProgressTask) {
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  return (
    <div>
      <h3 className="text-center bg-green-400 rounded-t-xl p-2">In Progress to do's:</h3>
      <ul className="bg-green-400/50 rounded-b-xl p-1">
        {inProgressTodos.map((todo, index) => (
          <li key={index} className='flex justify-between'>
            <p className='ml-2'>
              ⫸ {todo}
            </p>
            <div className="flex">
              <button onClick={() => downGradeAInProgressTask(todo)} className="hover:text-amber-400">
                <ArrowUpCircleIcon className="h-8 w-8" />
              </button>
              <button onClick={() => addDoneTodo(todo)} className="hover:text-red-400">
                <ArrowDownCircleIcon className="h-8 w-8" />
              </button>
              <button onClick={() => deleteInProgressTodo(todo)} className="hover:text-blue-600">
                <XCircleIcon className="h-8 w-8" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InProgressCard