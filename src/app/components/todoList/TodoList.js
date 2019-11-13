import React from "react";
import Task from "./Task";
import idGenerator from "react-id-generator";
import NewTask from "./NewTask";
import ColorPicker from './ColorPicker';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            searchValue: "",
            category: "social",
            displayColorPicker: false,
            chosenColor: "white"
        }
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
    handleChange = (color) => {
        this.setState({ chosenColor: color.hex })
      };
    
    createNewTask = () => {
        if (this.state.searchValue) {
            const newTask = {
                id: idGenerator(),
                content: this.state.searchValue,
                completed: false,
                category: this.state.category,
                color: this.state.chosenColor
            };
            this.setState({
                    tasks: [newTask, ...this.state.tasks],
                    searchValue: ""
                });
        }
    }

    setSearchValue = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    setCategory = (e)=>{
        this.setState({category: e.target.value});
    }
    deleteTask = (id) => {
        const tasks = this.state.tasks.filter((task) => {
            return task.id !== id
        });
        this.setState({ tasks: tasks });
    }

    toggleCompleted = (id) => {
        const completedTasks = this.state.tasks.map((task)=> {
            if(task.id === id){
             task.completed = !task.completed;
            }
            return task;
        })
        this.setState({tasks:completedTasks})
    }


    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
          }
          const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }
        const { tasks, searchValue } = this.state;
        const renderedNotes = tasks.map((task) => {
            return <Task key={task.id} task={task} deleteTask={this.deleteTask} toggleCompleted={this.toggleCompleted} />
        });

        return (
            <>  
            <header>
                <h1>Todo List</h1>
           </header>
                <NewTask 
                createNewTask={this.createNewTask} 
                searchValue={searchValue} 
                setSearchValue={this.setSearchValue} 
                setCategory={this.setCategory} />
                <ColorPicker 
                 popover={popover}
                 cover={cover} 
                 handleClick={this.handleClick}
                 handleClose={this.handleClose}
                 handleChange={this.handleChange}
                 displayColorPicker={this.state.displayColorPicker}
                 chosenColor={this.state.chosenColor}
                 />
                {renderedNotes}
            </>
        )
    }
}

export default TodoList;