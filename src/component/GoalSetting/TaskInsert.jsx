import React, { useState } from 'react';

function TaskInsert({addItem}) {
    const [taskName, setTaskName] = useState('');

    function valueChange(e) {
        setTaskName(e.target.value);
    }
    function taskInput(e) {
        e.preventDefault();
        addItem(taskName);
        setTaskName('');
    }

     return (
        <form className='TaskInsert'>
            <input placeholder="할 일을 입력하세요." value={taskName} onChange={valueChange}/>
            <button type="submit" onClick={taskInput}>+</button>
        </form>
    );
}
export default TaskInsert;