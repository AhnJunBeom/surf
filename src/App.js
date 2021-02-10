import React from 'react';
import CurrentGoal from './page/CurrentGoal';
import GoalSetting from './page/GoalSetting';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={GoalSetting} />
            <Route path='/goal' component={CurrentGoal} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;