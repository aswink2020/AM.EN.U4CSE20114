// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './TrainList';
import TrainDetails from './TrainDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainList} />
        <Route path="/train/:trainId" component={TrainDetails} />
      </Switch>
    </Router>
  );
};

export default App;
