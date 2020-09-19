import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import './assets/styles/global.css'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
