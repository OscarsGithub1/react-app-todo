import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react"
import Task from "./components/Task";
function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Gym',
        day: 'Feb 3th 2:30am',
        reminder: true,
    },
    
    {
        id: 2,
        text: 'Work',
        day: 'Feb 4th 2:30am',
        reminder: false,
    },
    
    {
        id: 3,
        text: 'Study',
        day: 'Feb 5th 2:30am',
        reminder: true,
    },
    ])

//Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== 
 id))
}
//End of delete task

// Toogle reminder
const toggleReminder = (id) => {
setTasks(
  tasks.map((task) => 
task.id === id ? {...task, reminder:
   !task.reminder} : task))
}
//

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
