import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './routes/Intro'
import Home from './routes/Home';
import Contact from './routes/ContactMe';
import Pika from './routes/PickAChew';
import Tempera from './routes/Tempera';
import Weather from './routes/WeatherApp';
import Universe from './routes/Universe';
import About from './routes/AboutMe'
import Credits from './routes/Credits'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Intro} />
          <Route path='/Home' component={Home} />
          <Route path='/Contact-me' component={Contact} />
          <Route path='/Pick a Chew' component={Pika} />
          <Route path='/Tempera' component={Tempera} />
          <Route path='/Weather-app' component={Weather} />
          <Route path='/Wild-Universe' component={Universe} />
          <Route path='/About-me' component={About} />
          <Route path='/Credits-to-artists' component={Credits} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
