import React, { useContext } from 'react';
import { store } from '../../store';
import ArtistList from '../ArtistList/ArtistList';
import './ArtistRankerPage.css';

function ArtistRankerPage() {
  const { dispatch } = useContext(store);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'addArtist', payload: { name: document.getElementById('add-artist-name').value } });
  }

  return (
    <div className="artist-ranker">
      <h1>Artist Ranker</h1>
      <hr />
      <h2>ADD ARTIST</h2>
      <form onSubmit={handleSubmit}>
        <input id="add-artist-name" type="text" required />
        <br />
        <input id="submit-button" type="submit" />
      </form>
      <hr />
      <h2>Ranking List</h2>
      <ArtistList />
    </div>
  );
}

export default ArtistRankerPage;
