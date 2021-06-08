import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home'
import Contact from './routes/Contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Contact-me' exact component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
