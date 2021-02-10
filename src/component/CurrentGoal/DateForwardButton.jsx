import React from 'react';

function DateForwardButton({renderedDate, setRenderedDate}) {

    function handleChange() {
        const newDate = renderedDate;
        newDate.setDate(newDate.getDate() + 1);
        setRenderedDate(newDate);
    }

    return (
        <button onClick = {handleChange}>다음</button>
    );
}


export default DateForwardButton;