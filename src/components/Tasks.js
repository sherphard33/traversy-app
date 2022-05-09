import Task from "./task"


const Tasks = ({tasks, del}) => {

  return (
    <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask = {del}/>
    ))}
    </>
  )
}

export default Tasks