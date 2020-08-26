import React, { useContext } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ArtistContext from '../../ArtistContext';

function AddRemoveStarButtons() {
  const { artistList, setArtistList } = useContext(ArtistContext);
  function addStar(event) {
    event.stopPropagation();
    const artistId = event.target.closest('[data-id]').getAttribute('data-id');
    const updatedArtistObj = artistList.map((artistObj) => (artistObj.Id.toString() === artistId
      ? { ...artistObj, stars: artistObj.stars + 1 } : artistObj));
    setArtistList(updatedArtistObj);
  }

  function removeStar(event) {
    event.stopPropagation();
    const artistId = event.target.closest('[data-id]').getAttribute('data-id');
    const artistObject = artistList.find((artistObj) => artistObj.Id.toString() === artistId);
    if (artistObject.stars === 0) {
      return;
    }

    const updatedArtistObj = artistList.map((artistObj) => (artistObj.Id.toString() === artistId
      ? { ...artistObj, stars: artistObj.stars - 1 } : artistObj));
    setArtistList(updatedArtistObj);
  }

  return (
    <span>
      <AddCircleOutlineIcon fontSize="large" onClick={addStar} />
      <RemoveCircleOutlineIcon fontSize="large" onClick={removeStar} />
    </span>
  );
}

export default AddRemoveStarButtons;
