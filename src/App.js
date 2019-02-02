import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentTask: {id:"", text: '', status: 'Задача выполняется'},
    tasks: [
        {id: 1, text: 'Buy milk', status: 'Задача выполняется'},
        {id: 2, text: 'Walk with dog', status: 'Задача выполняется'},
        {id: 3, text: 'Do homework', status: 'Задача выполняется'},
        {id: 4, text: 'Go home', status: 'Задача выполнена'},
    ],
  };

    this.handleChange = this.handleChange.bind(this);

    this.newTask = this.newTask.bind(this);

  }

  handleChange(event) {
    console.log(this.state);
    let value = event.target.value;

    let currentTask = {
        ...this.state.currentTask,
        text: value
    };
    this.setState({
        ...this.state,
        currentTask
    });
    console.log(this.state);
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
        currentTask: {id:"", text: '', status: 'Задача выполняется'},
    });
  }

  isAddButtonDisabled = () => {
       return this.state.currentTask.text === '';
    };

  removeTask(id) {
    let taskId = this.state.tasks.findIndex(task => {
        return task.id === id;
    });

    const tasks = [...this.state.tasks];
    tasks.splice(taskId, 1);

    this.setState({
        ...this.state,
        tasks
    });
  };

  render() {
    return (
      <div className="App">
        <AddTaskForm
            task={this.state.currentTask}
            onAddTask={this.newTask}
            onChangeHandle={this.handleChange}
            isAddButtonDisabled={this.isAddButtonDisabled()}
        />
            <div className="List_of_tasks">
                {Object.values(this.state.tasks).map((task, i) => {
                    return (
                        <Task
                            text={task.text}
                            id={task.id}
                            status={task.status}
                            onTaskRemove={() => this.removeTask(task.id)}
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
