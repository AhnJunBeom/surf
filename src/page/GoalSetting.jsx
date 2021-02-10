import React, { useState } from 'react';
import GoalField from '../component/GoalSetting/GoalField';
import ForwardButton from '../component/GoalSetting/ForwardButton';
import BackButton from '../component/GoalSetting/BackButton';
import TaskInsert from '../component/GoalSetting/TaskInsert';
import TaskList from '../component/GoalSetting/TaskList';
import TermSetting from '../component/GoalSetting/TermSetting';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setGoal} from '../Actions/GoalSetting';

function GoalSetting() {
    const [goalName, setGoalName] = useState('');
    const [term, setTerm] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [step, setStep] = useState(1);
    let history = useHistory();
    const dispatch = useDispatch();

    function addItem(item) {
        setTasks(tasks.concat(item));
    }

    function complete(e) {
        e.preventDefault();
        dispatch(setGoal({goalName: goalName, term: term, tasks: tasks}));
        history.push('/goal');
    }

    if (step === 1) {
        return(
            <div>
                <p>이루고 싶은 목표가 있나요?</p>
                <GoalField goalName={goalName} setGoalName = {setGoalName}/>
                <ForwardButton step={step} setStep = {setStep}/>
            </div>
        );
    }
    else if (step === 2) {
        return(
            <div>
                <p>습관 플랜을 선택해주세요.</p>
                <TermSetting setTerm = {setTerm}/>
                <BackButton step={step} setStep = {setStep}/>
                <ForwardButton step={step} setStep = {setStep}/>
            </div>
        );
    }
    else {
        return(
            <div>
                <p>당신이 이루고싶은 <b>{goalName}</b>를 위해</p>
                <p>만들고 싶은 습관을 적어보세요. 아주 간단해도 돼요.</p>
                <TaskInsert addItem={addItem}  />
                <TaskList tasks={tasks} />
                <BackButton step={step} setStep = {setStep}/>
                <button onClick={complete}>완료</button>
            </div>
        );
    }
}

export default GoalSetting;