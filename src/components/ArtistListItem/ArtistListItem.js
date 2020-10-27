import React from 'react';
import { useHistory } from 'react-router-dom';
import AddRemoveStarButtons from '../AddRemoveStar/AddRemoveStar';
import './ArtistListItem.css';

function ArtistListItem(props) {
  const history = useHistory();

  function goToProfile() {
    history.push('/profile', props.artistObj);
  }
  return (
    <li className="artist-stats">
      <div onClick={goToProfile}>
        <img src={`${props.artistObj.url}`} alt="" />
        <span>
          {props.artistObj.name}
        </span>
        <span>
          {props.artistObj.stars}
          {' '}
          (Stars)
        </span>
        <AddRemoveStarButtons artistId={props.artistObj.id} />
      </div>
    </li>

  );
}

export default ArtistListItem;
