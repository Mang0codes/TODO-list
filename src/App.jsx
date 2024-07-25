import React, { useEffect, useState } from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

const oldTask = localStorage.getItem("tasks");
console.log(oldTask);

const App = () => {

   const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);

   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
   
   const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex)
        setTasks(newTasks);
   }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <header className='app_header'></header>
      <main className='app_main'>
        <TaskColumn handleDelete={handleDelete}  columnName="To Do" icon={todoIcon} tasks={tasks} status="todo"></TaskColumn>
        <TaskColumn handleDelete={handleDelete} columnName="Doing" icon={doingIcon} tasks={tasks} status="doing"></TaskColumn>
        <TaskColumn handleDelete={handleDelete} columnName="Done" icon={doneIcon} tasks={tasks} status="done"></TaskColumn>
      </main>
    </div>
  )
}

export default App
