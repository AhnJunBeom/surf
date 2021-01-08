import React from 'react';

class CurrentGoal extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            goalName : 'App Release',
            date : date.toLocaleDateString(),
            tasks : [{taskname:111, complete:false}]
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.date}</h2>
                <div>{this.state.goalName}</div>
            </div>
        );
    }
}
export default CurrentGoal;