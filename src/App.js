import React, { useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react"
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Filter from "./components/filter";//DETTA
import Delete from "./components/Delete";
function App() {
//  const [showAddTask, setShowAddTask] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [inputFilter, setInputFilter] = useState("")//DETTA
  const [newList, setNewList] = useState([])
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

useEffect (() => { //DETTA
  console.log(inputFilter);
  filterInputHandler();

}, [inputFilter]);

//Gjordes idag
//DETTA
const filterInputHandler = () => {
  const filteredList = tasks.filter((v) => inputFilter === "" || v.text.toLowerCase().includes(inputFilter.toLowerCase()));
  console.log(filteredList);
  setNewList(filteredList)
}
//
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

const filteredTasks = tasks.filter((v) => inputFilter === "" || v.text.toLowerCase().includes(inputFilter.toLowerCase()));

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={filteredTasks} onDelete=
        {deleteTask} onToggle={toggleReminder} 
        inputFilter={inputFilter}//DETTA
        newList={newList}/>//DETTA
        
      
      ) : (
        'No tasks to show' 
      )}
<Filter inputFilter = {inputFilter}
setInputFilter = {setInputFilter}
tasks = {tasks}/>
  <Delete deleteCallBack={ () => {setTasks([])}} />
    </div>

   
  );
}

export default App;
