// import React from 'react' //needed for class
import Header from './conponents/Header'
import Tasks from  './conponents/Tasks'
import AddTask from './conponents/AddTask'
import {useState} from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        text: 'Class Meetings',
        day: 'Feb 6th at 11:30am',
        reminder: true,
    },
    {
        text: 'Groceries',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id))
  }

  const toggleReminder = (id) => {
     setTasks(tasks.map((task, index) => index === id ? {...task, reminder: !task.reminder} : task))
  }
  // example 1: using variables

  // const name = 'Kev'
  // const x = true

  // return (
  //   <div className="container">
  //     <h1>Hello From React</h1>
  //     <h2>I'm {x ? name : 'guest'}</h2>
  //   </div>
  // )


  // example 2: import from other js file
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> 
        : 'No Tasks At the Moment'
      }
    </div>
  );

}

export default App;
