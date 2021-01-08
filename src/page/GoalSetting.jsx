import React from 'react';
import { Link } from 'react-router-dom';
import GoalField from '../component/GoalSetting/GoalField';
import ForwardButton from '../component/GoalSetting/ForwardButton';
import BackButton from '../component/GoalSetting/BackButton';
import TaskInsert from '../component/GoalSetting/TaskInsert';
import TaskList from '../component/GoalSetting/TaskList';

class GoalSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalName : '',
            date : '',
            tasks : [],
            step : 1
        }
        this.valueChange = this.valueChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    valueChange(key, value) {
        this.setState({[key] : value});
    }
    addItem(item) {
        this.setState({tasks : this.state.tasks.concat(item)});
    }

    render() {
        if (this.state.step === 1) {
            return(
                <div>
                    <p>이루고 싶은 목표가 있나요?</p>
                    <GoalField goalName={this.state.goalName} valueChange = {this.valueChange}/>
                    <ForwardButton step={this.state.step} valueChange = {this.valueChange}/>
                </div>
            );
        }
        else if (this.state.step === 2) {
            return(
                <div>
                    <p>언제까지 할건가요?</p>
                    <BackButton step={this.state.step} valueChange = {this.valueChange}/>
                    <ForwardButton step={this.state.step} valueChange = {this.valueChange}/>
                </div>
            );
        }
        else {
            return(
                <div>
                    <p>당신이 이루고싶은 <b>{this.state.goalName}</b>를 위해</p>
                    <p>만들고 싶은 습관을 적어보세요. 아주 간단해도 돼요.</p>
                    <TaskInsert tasks={this.state.tasks} addItem={this.addItem}  />
                    <TaskList tasks={this.state.tasks} />
                    <BackButton step={this.state.step} valueChange = {this.valueChange}/>
                    <Link to='/goal'><button>완료</button></Link>
                </div>
            );
        }
    }
}
export default GoalSetting;