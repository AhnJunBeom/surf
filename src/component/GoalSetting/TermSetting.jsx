import React from 'react';

function TermSetting({setTerm}) {

  function handleChange(e) {
    const value = e.target.value;
    setTerm(Number(value));
  }

  return (
    <div>
      <input type="radio" id="3" name="termSetting" value='3' onClick={handleChange} />
      <label htmlFor="3">작심삼일</label>
      <input type="radio" id="21" name="termSetting" value='21' onClick={handleChange} />
      <label htmlFor="21">21일</label>
      <input type="radio" id="66" name="termSetting" value='66' onClick={handleChange} />
      <label htmlFor="66">66일</label>
    </div> 
  );
}

export default TermSetting;
