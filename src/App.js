import React from 'react';
import CurrentGoal from './page/CurrentGoal';
import GoalSetting from './page/GoalSetting';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Route exact path="/" component={GoalSetting} />
          <Route path='/goal' component={CurrentGoal} />
        </BrowserRouter>
    </div>
  );
}
export default App;