import React, { useContext } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { store } from '../../store';

function AddRemoveStarButtons(props) {
  const { dispatch } = useContext(store);

  function addStar(event) {
    event.stopPropagation();
    dispatch({ type: 'addStar', payload: { artistId: props.artistId } });
  }

  function subtractStar(event) {
    event.stopPropagation();
    dispatch({ type: 'subtractStar', payload: { artistId: props.artistId } });
  }

  return (
    <span>
      <AddCircleOutlineIcon fontSize="large" onClick={addStar} />
      <RemoveCircleOutlineIcon fontSize="large" onClick={subtractStar} />
    </span>
  );
}

export default AddRemoveStarButtons;
