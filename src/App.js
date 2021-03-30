import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Event from './components/event'
import Buy from './components/buy'
import Tickets from './components/tickets'
import Error from './components/error'

import './App.css';

function App() {

return (
  <div className="container" >
    <section>
    <Switch>
        <Route path="/" component={ Event } exact/>
        <Route path="/buy/:id" component={ Buy } exact/>
        <Route path="/tickets/:id" component={ Tickets } exact/>
        <Route component={ Error } />
    </Switch>
    </section>
    </div>
  );
}

export default App;
