import React from "react";

const Task = (props) =>{
        
        const { task, deleteTask, toggleCompleted } = props;
        const sport = task.category === "sport" ? <i className="fas fa-futbol"></i> : "";
        const bussines = task.category === "business" ? <i className="fas fa-briefcase"></i> : "";
        const social = task.category === "social" ? <i className="fas fa-user-friends"></i> : "";

        return (
            <div className="task" style={{backgroundColor: task.color}}>
                <div className="rendered-task">
                <small>{sport || bussines || social}</small> 
                <input type="checkbox" onChange={() => toggleCompleted(task.id)} />
                <p className={task.completed ? "content completed" : "content"}>{task.content}</p> 
                </div>
                <div>
                <p className="remove" onClick={() => deleteTask(task.id)}>Remove</p>
                </div>
            </div>
        )
    
}

export default Task;