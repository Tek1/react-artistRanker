import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import ArtistContext from '../../ArtistContext';
import RankArtist from '../RankArtist/RankArtist';
import './ArtistRankerPage.css';

function ArtistRankerPage() {
  const { artistList, setArtistList } = useContext(ArtistContext);
  const { register, errors, handleSubmit } = useForm();
  function onSubmit(data) {
    const nextId = (artistList && artistList.map((artistObject) => artistObject.Id)
      .reduce((accumulator, currentValue) => Math.max(accumulator, currentValue)) + 1) || 1;
    const { artistName } = data;
    artistList ? setArtistList([...artistList, {
      Id: nextId, name: artistName, url: '', stars: 0,
    }])
      : setArtistList([{ Id: nextId, name: artistName, stars: 0 }]);
  }
  return (
    <div className="artist-ranker">
      <h1>Artist Ranker</h1>
      <hr />
      <h2>ADD ARTIST</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="artistName" type="text" ref={register({ required: true })} />
        <span id="error-artist-input">At least one character required</span>
        <br />
        <input
          id="submit-button"
          onClick={() => {
            if (errors.artistName) {
              const spanElement = document.getElementById('error-artist-input');
              spanElement.style.display = 'inline';
              setTimeout(() => { spanElement.style.opacity = '0'; }, 3000);
              setTimeout(() => { spanElement.style.display = 'none'; }, 3300);
              setTimeout(() => { spanElement.style.opacity = '1'; }, 3300);
            }
          }}
          type="submit"
          value="ADD"
        />
      </form>
      <hr />
      <h2>Ranking List</h2>
      <RankArtist />

    </div>
  );
}

export default ArtistRankerPage;
