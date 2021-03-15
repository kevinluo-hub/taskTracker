import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={props.onToggle}>
            <h3>{props.task.text}{' '}
            <FaTimes 
                style={tstyle} 
                onClick={props.onDelete} 
            />
            </h3>
            <p>{props.task.day}</p>
        </div>
    )
}

const tstyle = {color: 'red', cursor:'pointer'}
export default Task
