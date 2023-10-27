import React from 'react';
import {ArrowUpCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";

function DoneCard(props) {

  const {todos, deleteDoneTodo, downGradeADoneTask} = props;

  return (
    <div>
      <h3 className="text-center bg-red-400 rounded-t-xl p-2">Done to do's:</h3>
      <ul className="bg-red-400/50 rounded-b-xl p-1">
        {todos.map((todo, index) => (
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