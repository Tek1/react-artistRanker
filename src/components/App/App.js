import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistRankerPage from '../ArtistRankerPage/ArtistRankerPage';
import ArtistProfile from '../ArtistProfile/ArtistProfile';
import ArtistContext from '../../ArtistContext';
import './App.css';

function App() {
  const [artistList, setArtistList] = useState();
  return (
    <ArtistContext.Provider value={{ artistList, setArtistList }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ArtistRankerPage />
            </Route>
            <Route path="/profile">
              <ArtistProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </ArtistContext.Provider>
  );
}

export default App;
