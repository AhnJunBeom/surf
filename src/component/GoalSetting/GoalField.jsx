import React from 'react';

class GoalField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.valueChange('goalName', value);
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.goalName} onChange={this.handleChange} placeholder="나의 목표" />
            </div>
        );
    }
}

export default GoalField;