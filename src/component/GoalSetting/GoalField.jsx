import React from 'react';

function GoalField({ goalName, setGoalName}) {

    function handleChange(e) {
        const value = e.target.value;
        setGoalName(value);
    }

    return (
        <div>
            <input type="text" value={goalName} onChange={handleChange} placeholder="나의 목표" />
        </div>
    );
}

export default GoalField;