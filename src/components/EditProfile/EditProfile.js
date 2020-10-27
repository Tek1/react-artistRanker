import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { store } from '../../store';
import './EditProfile.css';

function EditProfile() {
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState(location.state.name);
  const [url, setUrl] = useState(location.state.url);
  const { dispatch } = useContext(store);

  function editName(event) {
    setName(event.target.value);
  }

  function editUrl(event) {
    setUrl(event.target.value);
  }

  function saveEditNameUrl(event) {
    event.preventDefault();
    const artistId = location.state.id;
    dispatch({ type: 'editDetails', payload: { artistId, name, url } });
    history.goBack();
  }

  function goBack() {
    history.goBack();
  }

  return (
    <div className="artist-page">
      <h1>ARTIST PAGE</h1>
      <form onSubmit={saveEditNameUrl}>
        Name:
        {' '}
        <input id="edit-name" name="artistName" value={name} onChange={editName} />
        <br />
        Picture Url:
        {' '}
        <input id="edit-url" name="artistUrl" value={url} onChange={editUrl} />
        <br />
        <input className="submit-edit" type="submit" />
        <button className="button-back" type="button" onClick={goBack}>Back</button>
      </form>
    </div>

  );
}

export default EditProfile;
