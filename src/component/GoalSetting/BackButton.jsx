import React from 'react';

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.valueChange('step', this.props.step - 1);
    }

    render () {
        return (
            <button onClick = {this.handleChange}>이전</button>
        );
    }
}

export default BackButton;