import React, { useState } from 'react';
import DateForwardButton from '../component/CurrentGoal/DateForwardButton';
import DateBackButton from '../component/CurrentGoal/DateBackButton';
import { useSelector } from 'react-redux';

function CurrentGoal() {
    const today = new Date()
    const goalName = useSelector(state => state.goalSetting.goalName);
    const tasks = useSelector(state => state.goalSetting.tasks);
    const [renderedDate, setRenderedDate] = useState(today);

    return(
        <div>
            <div>
                <DateBackButton date={renderedDate} dateChange={setRenderedDate} />
                <b>{renderedDate.toLocaleDateString()}</b>
                <DateForwardButton date={renderedDate} dateChange={setRenderedDate} />
            </div>
            <div>{goalName}</div>
        </div>
    );
}

export default CurrentGoal;