import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

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
  return (
    <div className="container">
      <Header title="James" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
