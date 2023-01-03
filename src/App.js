import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react"
import Task from "./components/Task";
import AddTask from "./components/AddTask";
function App() {
//  const [showAddTask, setShowAddTask] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
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

//...Add Task
const addTask = (task) => {
const id = Math.floor(Math.random() *
10000) +1
console.log(id)
const newTask = { id, ...task}
setTasks([...tasks, newTask])
}

//

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
    <div className='container'>
      <Header onAdd={() => setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      
      ) : (
        'No tasks to show' 
      )}

    </div>
  );
}

export default App;
