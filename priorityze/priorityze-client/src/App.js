import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    
      <Router >
        {/*
          routes:           components:
            welcome           WelcomePage
            login             LoginPage
            signup            SignupPage
            users/:id         UserPage
            goals/index       UserPage -> GoalsList
            goals/:id         UserPage -> Goal
            goals/steps/index UserPage -> Goal ->StepsList
        */}
        <Route exact path="/" ><WelcomePage /> </Route>
        <Route path="/login" ><LoginPage /> </Route>
        <Route path="/signup" ><SignupPage /> </Route>
        <Route path="/users/:id" ><UserPage /> </Route>
      </Router>
    
  );
}

export default App;
