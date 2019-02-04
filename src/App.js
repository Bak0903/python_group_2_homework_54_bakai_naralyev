import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentTask: {id:"", text: '', status: false},
    tasks: [
        {id: 1, text: 'Buy milk', status: false},
        {id: 2, text: 'Walk with dog', status: false},
        {id: 3, text: 'Do homework', status: false},
        {id: 4, text: 'Go home', status: true},
    ],
  };

    this.handleChange = this.handleChange.bind(this);
    this.newTask = this.newTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.isAddButtonDisabled = this.isAddButtonDisabled.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleChange(event) {
    let value = event.target.value;

    let currentTask = {
        ...this.state.currentTask,
        text: value
    };
    this.setState({
        ...this.state,
        currentTask
    });
  }


  newTask(event) {
    event.preventDefault();
    let task = {...this.state.currentTask};
    const now = new Date();
    task.id = now.getTime();
    let tasks = [...this.state.tasks, task];
    this.setState({
        ...this.state,
        tasks,
        currentTask: {id:"", text: '', status: false},
    });
  }

  isAddButtonDisabled = () => {
       return this.state.currentTask.text === '';
    };

  removeTask(id) {

    const tasks = [...this.state.tasks];
    tasks.splice(id, 1);
    this.setState({
        ...this.state,
        tasks
    });
  };

  handleInputChange(event, id) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let task = this.state.tasks[id];
        task.status = value;
        let tasks = [...this.state.tasks];
        tasks[id] = task;
        this.setState({
            ...this.state,
            tasks
        });
  }

  render() {
    return (
      <div className="App">
          <div>
            <AddTaskForm
                task={this.state.currentTask}
                onAddTask={this.newTask}
                onChangeHandle={this.handleChange}
                isAddButtonDisabled={this.isAddButtonDisabled()}
            />
          </div>
        <div className="List_of_tasks">
            {Object.values(this.state.tasks).map(
                (task, i) => {
                return (
                    <Task
                        text={task.text}
                        id={task.id}
                        status={task.status}
                        onTaskRemove={() => this.removeTask(i)}
                        onCheckbox = {(event) => this.handleInputChange(event, i)}
                    />
                );
                }
            )
            }
        </div>
      </div>
    );
  }
}

export default App;
