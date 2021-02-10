import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
    return(
        <div>
            {tasks.map(task => (<Task taskName={task} />))}
         </div>
    );
}

export default TaskList;