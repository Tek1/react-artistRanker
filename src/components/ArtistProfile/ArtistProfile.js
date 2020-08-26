import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ArtistContext from '../../ArtistContext';
import './ArtistProfile.css';

function ArtistProfile() {
  const history = useHistory();
  const location = useLocation();
  const { register, errors, handleSubmit } = useForm();
  const [name, setName] = useState(location.state.name);
  const { artistList, setArtistList } = useContext(ArtistContext);

  function nameChange(event) {
    setName(event.target.value);
  }

  function goBack() {
    history.goBack();
  }

  const onSubmit = (data) => {
    const artistId = location.state.Id;
    const url = data.artistUrl;
    const updatedArtistList = artistList && artistList.map((artistObj) => (artistObj.Id === artistId
      ? { ...artistObj, name, url: (url || artistObj.url) } : artistObj));
    setArtistList(updatedArtistList);
    history.goBack();
  };

  return (
    <div className="artist-page">
      <h1>ARTIST PAGE</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        Name:
        {' '}
        <input id="edit-name" name="artistName" value={name} ref={register({ required: true })} onChange={nameChange} />
        <br />
        <span id="error-name">At least one character required</span>
        {errors.artistName && (() => {
          const spanElement = document.getElementById('error-name');
          spanElement.style.display = 'block';
          setTimeout(() => { spanElement.style.opacity = '0'; }, 3000);
          setTimeout(() => { spanElement.style.display = 'none'; }, 3300);
          setTimeout(() => { spanElement.style.opacity = '1'; }, 3300);
        })()}
        Picture Url:
        {' '}
        <input id="edit-url" name="artistUrl" ref={register()} />
        <br />
        <input className="button-submit" type="submit" />
        <button className="button-back" type="button" onClick={goBack}>Back</button>
      </form>
    </div>

  );
}

export default ArtistProfile;
