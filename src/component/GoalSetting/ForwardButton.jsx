import React from 'react';

function BackButton({ step, setStep }) {

    function handleChange() {
        setStep(step + 1);
    }
    return (
            <button onClick = {handleChange}>다음</button>
    );
}


export default BackButton;