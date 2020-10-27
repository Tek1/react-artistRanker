import React, { useContext } from 'react';
import { store } from '../../store';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import './ArtistList.css';

function ArtistList() {
  const { artistList } = useContext(store);
  return (
    <ul>{artistList.map((artistObj) => <ArtistListItem artistObj={artistObj} key={artistObj.id.toString()} />)}</ul>
  );
}

export default ArtistList;
