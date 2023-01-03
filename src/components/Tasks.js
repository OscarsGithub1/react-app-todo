import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, filterInput, newList}) => {
console.log(tasks);
console.log(newList);

//let newList = tasks.filter((v) => v !=0);

//newList = tasks.filter((v) => !v.text.indexOf(filterInput))

  return (


    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
