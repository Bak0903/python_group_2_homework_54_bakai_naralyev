import React, {Component} from 'react';
import './Task.css';


class AddTaskForm extends Component {
    render() {
        return (
                    <div className={"task"} id={this.props.id}>
                        <div>{this.props.text}</div>
                        <div>{this.props.status}</div>
                        <div>
                            <button className={"delete_button"} onClick={this.props.onTaskRemove}>delete</button>
                            <div className={"checkbox"}>
                                <label> Is done:
                                    <input
                                        type="checkbox"
                                        checked={this.props.status}
                                        onChange={this.props.onCheckbox}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

        );
    }
}


export default AddTaskForm;