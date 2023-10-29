import React, { useContext, useState } from 'react'
import DailyContext from '../../contexts/DailyContext';

export default function TaskForm() {

  const { waitingTodos, setWaitingTodos, setWaitingCount } = useContext(DailyContext);
  const [task, setTask] = useState("");

  function addWaitingTodo(task) {
    const newWaitingTodos = [...waitingTodos, task];
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    const newTask = value;
    setTask(newTask);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "" || null) {
      alert("Please enter a valid task to be done.");
    }
    else {
      addWaitingTodo(task);
      setTask("");
    }
  }

  return (
    <div className="flex flex-col items-center text-center m-2 mb-4">
      <form onSubmit={handleSubmit} className='flex flex-col w-11/12 lg:w-3/4 border-2 border-blue-900 bg-gray-200 items-center gap-2 rounded-xl'>
        <label htmlFor="waiting-todo" className='mt-2'>Enter your task:</label>
        <input onChange={handleInputChange} type="text" name="task" value={task} id="waiting-todo" className='border-2 border-blue-900 w-11/12 rounded-md' />
        <button className=' border-2 border-blue-900 w-1/2 rounded-2xl mb-2' type="submit">Add to do</button>
      </form>
    </div>
  )
}