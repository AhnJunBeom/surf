import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.taskName}</div>
        );
    }
}
export default Task;