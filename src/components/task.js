import {FaTimes} from 'react-icons/fa';

function Task({task, deleteTask}) {
  return (
    <div className="task" >
        <h3 >{task.text} <FaTimes onClick={() => deleteTask(task.id)} style={{color:'red', cursor: 'pointer'}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task