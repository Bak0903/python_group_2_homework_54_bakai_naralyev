import React, {Component} from 'react';
import './AddTaskForm.css';


class AddTaskForm extends Component {
    render() {
        return (
            <div className="AddTaskForm">
                
                <form className={"task_form"}>
                    <input type="text" className={"new_task"} name={"text"} value={this.props.text} onChange={this.props.onChangeHandle}/>
                    <button type="submit" disabled={this.props.isAddButtonDisabled} className={"add_task"} onClick={this.props.onAddTask}>Add</button>
                </form>

            </div>
        );
    }
}


export default AddTaskForm;