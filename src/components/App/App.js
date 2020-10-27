import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistRankerPage from '../ArtistRankerPage/ArtistRankerPage';
import EditProfile from '../EditProfile/EditProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ArtistRankerPage />
          </Route>
          <Route path="/profile">
            <EditProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
