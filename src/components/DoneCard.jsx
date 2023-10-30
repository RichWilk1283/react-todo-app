import React, { useContext } from 'react';
import {ArrowUpCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";
import DailyContext from '../../contexts/DailyContext';

function DoneCard({context}) {

  const { 
    inProgressTodos,
    setInProgressTodos,
    doneTodos,
    setDoneTodos,
    setInProgressCount,
    setDoneCount
  } = useContext(context);

  function downGradeADoneTask(doneTask) {
    const newInProgressTodos = [...inProgressTodos, doneTask];
    const newDoneTodos = doneTodos.filter(todo => todo !== doneTask);
    setInProgressTodos(newInProgressTodos);
    setDoneTodos(newDoneTodos);
    setInProgressCount(newInProgressTodos.length);
    setDoneCount(newDoneTodos.length);
  }

  function deleteDoneTodo(doneTask) {
    const newDoneTodos = doneTodos.filter(todo => todo !== doneTask);
    setDoneTodos(newDoneTodos);
    setDoneCount(newDoneTodos.length);
  }

  return (
    <div>
      <h3 className="text-center bg-red-400 rounded-t-xl p-2">Done to do's:</h3>
      <ul className="bg-red-400/50 rounded-b-xl p-1">
        {doneTodos.map((todo, index) => (
          <li key={index} className='flex justify-between'>
            <p className='ml-2'>
              ⫸ {todo}
            </p>
            <div className="flex">
              <button onClick={() => downGradeADoneTask(todo)}  className="hover:text-green-400">
                <ArrowUpCircleIcon className="h-8 w-8" />
              </button>
              <button  className="hover:text-blue-600">
                <XCircleIcon onClick={() => deleteDoneTodo(todo)} className="h-8 w-8" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DoneCard