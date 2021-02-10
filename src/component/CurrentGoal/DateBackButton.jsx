import React from 'react';

function DateBackButton({renderedDate, setRenderedDate}) {

    function handleChange() {
        const newDate = renderedDate;
        newDate.setDate(newDate.getDate() - 1);
        setRenderedDate(newDate);
    }

    return (
        <button onClick = {handleChange}>이전</button>
    );
}


export default DateBackButton;