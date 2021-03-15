import {useState} from 'react'
import Task from './Task'

const Tasks = (props) => {
    return (
        <>
          {props.tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            onDelete={() => props.onDelete(index)} 
            onToggle={() => props.onToggle(index)}
          />
          ))}  
        </>
    )
}

export default Tasks
