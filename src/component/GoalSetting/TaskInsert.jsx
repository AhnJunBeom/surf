import React from 'react';

class TaskInsert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName : ''
        }
        this.valueChange = this.valueChange.bind(this);
        this.taskInput = this.taskInput.bind(this);
    }
    valueChange(e) {
        this.setState({taskName : e.target.value});
    }
    taskInput(e) {
        e.preventDefault();
        this.props.addItem(this.state.taskName);
        this.setState({taskName : e.target.value});
    }

    render () {
        return (
            <form className='TaskInsert'>
                <input placeholder="할 일을 입력하세요." value={this.state.taskName} onChange={this.valueChange}/>
                <button type="submit" onClick={this.taskInput}>+</button>
            </form>
        );
    }

}
export default TaskInsert;