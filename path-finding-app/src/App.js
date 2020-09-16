import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
