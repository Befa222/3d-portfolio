import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home'
import Contact from './routes/Contact'
import Pika from './routes/PickAChew'
import Tempera from './routes/Tempera'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Contact-me' component={Contact}/>
        <Route path='/Pick a Chew' component={Pika}/>
        <Route path='/Tempera' component={Tempera}/>
      </Switch>
    </Router>
  );
}

export default App;
