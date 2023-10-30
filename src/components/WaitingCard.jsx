import React, { useContext} from 'react';
import {ArrowDownCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";
import DailyContext from '../../contexts/DailyContext';

function WaitingCard({context}) {

  const {
    waitingTodos,
    setWaitingTodos,
    inProgressTodos,
    setInProgressTodos,
    setWaitingCount,
    setInProgressCount
  } = useContext(context);

  function addInProgressTodo(waitingTask) {
    const newInProgressTodos = [...inProgressTodos, waitingTask];
    const newWaitingTodos = waitingTodos.filter(todo => todo !== waitingTask);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }
  
  function deleteWaitingTodo(waitingTask) {
    const newWaitingTodos = waitingTodos.filter(todo => todo !== waitingTask);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }


  return (
    <div>
      <h3 className="text-center bg-amber-400 rounded-t-xl p-2">Waiting to do's:</h3>
      <ul className="bg-amber-400/50 rounded-b-xl p-1">
        {waitingTodos.map((todo, index) => (
          <li key={index} className='flex justify-between'>
            <p className='ml-2'>
              ⫸ {todo}
            </p>
            <div className="flex">
              <button onClick={() => addInProgressTodo(todo)} className="hover:text-green-400" >
                <ArrowDownCircleIcon className="h-8 w-8" />
              </button>
              <button onClick={() => deleteWaitingTodo(todo)} className="hover:text-blue-600" >
                <XCircleIcon className="h-8 w-8" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WaitingCard