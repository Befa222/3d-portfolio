import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home'
import Contact from './routes/Contact'
import Pika from './routes/PickAChew'
import Tempera from './routes/Tempera'
import Weather from './routes/WeatherApp'
import Universe from './routes/Universe'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Contact-me' component={Contact}/>
        <Route path='/Pick a Chew' component={Pika}/>
        <Route path='/Tempera' component={Tempera}/>
        <Route path='/Weather-app' component={Weather}/>
        <Route path='/Wild-Universe' component={Universe}/>
      
      </Switch>
    </Router>
  );
}

export default App;
