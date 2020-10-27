import React, { createContext, useReducer } from 'react';

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [artistList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'addArtist':
        const id = state.length ? Math.max(...state.map(artistObj => artistObj.id)) + 1 : 1; 
        return [...state, {id, name: action.payload.name, stars: 0, url: ""}].sort((a, b) => b.stars - a.stars);
         
      case 'editDetails':
        state.forEach(artistObj => {
          if(artistObj.id === action.payload.artistId) {
            artistObj.name = action.payload.name;
            artistObj.url = action.payload.url;
          } 
        })
      
        return [...state].sort((a, b) => b.stars - a.stars);
      
      case 'addStar': 
        state.forEach(artistObj => {
          if(artistObj.id === action.payload.artistId && artistObj.stars < 10) {
            artistObj.stars += 1;
          }
        });
        return [...state].sort((a, b) => b.stars - a.stars);
  
      case 'subtractStar':
        state.forEach(artistObj => {
          if(artistObj.id === action.payload.artistId && artistObj.stars > 0) {
            artistObj.stars -= 1;
          }
        });
        return [...state].sort((a, b) => b.stars - a.stars);  
        
      default: 
        return state;
    }
  }, []);

  return (
    <Provider value={{artistList, dispatch}}>
      { children }
    </Provider>
  )
}

export { StateProvider, store }


