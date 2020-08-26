import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ArtistContext from '../../ArtistContext';
import AddRemoveStarButtons from '../AddRemoveStar/AddRemoveStar';
import './RankArtist.css';

function RankArtist() {
  const { artistList } = useContext(ArtistContext);
  const history = useHistory();
  function goToProfile(event) {
    const artistId = event.target.closest('[data-id]').getAttribute('data-id');
    const activeArtistObj = artistList.find((artistObj) => artistObj.Id.toString() === artistId);
    history.push('/profile', activeArtistObj);
  }

  const ratingSortedList = artistList
    && artistList.sort((artistObjOne, artistObjTwo) => artistObjTwo.stars - artistObjOne.stars);
  const listItems = ratingSortedList && ratingSortedList.map((artistObject) => (
    <li className="artist-stats" key={artistObject.Id.toString()} data-id={`${artistObject.Id}`}>
      <div onClick={goToProfile}>
        <img src={`${artistObject.url}`} alt="" />
        <span>
          {artistObject.name}
        </span>
        <span>
          {artistObject.stars}
          {' '}
          (Stars)
        </span>
        <AddRemoveStarButtons />
      </div>
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}

export default RankArtist;
