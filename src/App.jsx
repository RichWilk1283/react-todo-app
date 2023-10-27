import { useState } from 'react'
import './App.css'
import WaitingCard from './components/WaitingCard'
import InProgressCard from './components/InProgressCard'
import DoneCard from './components/DoneCard'
import Header from './components/Header'

function App() {
  const [waitingCount, setWaitingCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const [waitingTodos, setWaitingTodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const [task, setTask] = useState("")
  
  function addWaitingTodo(task) {
    const newWaitingTodos = [...waitingTodos, task];
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }

  function addInProgressTodo(waitingTask) {
    const newInProgressTodos = [...inProgressTodos, waitingTask];
    const newWaitingTodos = waitingTodos.filter(todo => todo !== waitingTask);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }

  function addDoneTodo(inProgressTask) {
    const newDoneTodos = [...doneTodos, inProgressTask];
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setDoneTodos(newDoneTodos);
    setDoneCount(newDoneTodos.length);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  function downGradeADoneTask(doneTask) {
    const newInProgressTodos = [...inProgressTodos, doneTask];
    const newDoneTodos = doneTodos.filter(todo => todo !== doneTask);
    setInProgressTodos(newInProgressTodos);
    setDoneTodos(newDoneTodos);
    setInProgressCount(newInProgressTodos.length);
    setDoneCount(newDoneTodos.length);
  }

  function downGradeAInProgressTask(inProgressTask) {
    const newWaitingTodos = [...waitingTodos, inProgressTask];
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  function deleteWaitingTodo(waitingTask) {
    const newWaitingTodos = waitingTodos.filter(todo => todo !== waitingTask);
    setWaitingTodos(newWaitingTodos);
    setWaitingCount(newWaitingTodos.length);
  }

  function deleteInProgressTodo(inProgressTask) {
    const newInProgressTodos = inProgressTodos.filter(todo => todo !== inProgressTask);
    setInProgressTodos(newInProgressTodos);
    setInProgressCount(newInProgressTodos.length);
  }

  function deleteDoneTodo(doneTask) {
    const newDoneTodos = doneTodos.filter(todo => todo !== doneTask);
    setDoneTodos(newDoneTodos);
    setDoneCount(newDoneTodos.length);
  }

  const handleInputChange = (e) => {
    const {value} = e.target;
    const task = value;
    setTask(task);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "" || null)
    {
      alert("Please enter a valid task to be done.");
    }
    else {
      addWaitingTodo(task);
    }
  }
  
  return (
    <div>
      <Header waitingCount={waitingCount} inProgressCount={inProgressCount} doneCount={doneCount} />
      
      <div className="flex flex-col items-center text-center m-2 mb-4">
        <form onSubmit={handleSubmit} className='flex flex-col w-11/12 lg:w-3/4 border-2 border-blue-900 bg-gray-200 items-center gap-2 rounded-xl'>
          <label htmlFor="waiting-todo" className='mt-2'>Enter your task:</label>
          <input onChange={handleInputChange} type="text" name="task" value={task} id="waiting-todo" className='border-2 border-blue-900 w-11/12 rounded-md' />
          <button className=' border-2 border-blue-900 w-1/2 rounded-2xl mb-2' type="submit">Add to do</button>
        </form>
      </div>
      <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
        <WaitingCard todos={waitingTodos} addInProgressTodo={addInProgressTodo} deleteWaitingTodo={deleteWaitingTodo} />
        <InProgressCard todos={inProgressTodos} addDoneTodo={addDoneTodo} deleteInProgressTodo={deleteInProgressTodo} downGradeAInProgressTask={downGradeAInProgressTask} />
        <DoneCard todos={doneTodos} deleteDoneTodo={deleteDoneTodo} downGradeADoneTask={downGradeADoneTask} />
      </div>
    </div>
  )
}

export default App
