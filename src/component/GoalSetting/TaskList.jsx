import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.tasks.map(task => (<Task taskName={task} />))}
            </div>
        );
    }
}

export default TaskList;