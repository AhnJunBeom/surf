import React from 'react';

class ForwardButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.valueChange('step', this.props.step + 1);
    }

    render () {
        return (
            <button onClick = {this.handleChange}>다음</button>
        );
    }
}

export default ForwardButton;