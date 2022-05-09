import Task from "./task"


const Tasks = ({tasks, del, toggleReminder}) => {

  return (
    <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask = {del} onToggle={toggleReminder}/>
    ))}
    </>
  )
}

export default Tasks