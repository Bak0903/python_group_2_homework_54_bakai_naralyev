import React, {Component} from 'react';
import './Task.css';


class AddTaskForm extends Component {
    render() {

        if (this.props.status === 'Задача выполняется')

        return (
                    <div className={"task"} key={this.props.id}>
                        {this.props.text}
                    <button className={"delete_button"} onClick={this.props.onTaskRemove}>delete</button>
                    </div>

        );
        else {
            return (
                <div className={"task"} key={this.props.id}>
                    {this.props.text} {this.props.status}
                    <button className={"delete_button"} onClick={this.props.onTaskRemove}>delete</button>
                </div>
            )
        }
    }
}


export default AddTaskForm;