import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import InputForm from './components/input-form';

function App() {
  const [tasks, updateTasks] = useState([
    {
        id: 0,
        text: 'Doctors appoinment',
        day: 'Feb 5th at 14:20',
        reminder: true
    },
    {
        id: 1,
        text: 'Sex appoinment',
        day: 'Feb 5th at 00:20',
        reminder: false
    },
    {
        id: 2,
        text: 'Baby appoinment',
        day: 'Feb 7th at 10:09',
        reminder: true
    }
])
//Delete task
  const deleteTask = (id) =>{
    updateTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle remidner
  const toggleReminder = (id) =>{
    updateTasks(tasks.filter((task) => task.id === id ? {...task, reminder:!task.reminder} : task));
  }
  return (
    <div className="container">
      <Header title="James" />
      {tasks.length > 0 ? <Tasks tasks={tasks} del={deleteTask} toggleReminder = {toggleReminder}/> : 'No Tasks yet'}
      <InputForm />
    </div>
  );
}

export default App;
