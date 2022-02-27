import { useState, useReducer } from 'react';
import StoreContext from '../StoreContext';
import storeReducer from '../reducers/StoreReducer';

const StoreProvider = ({ children }) => {
  const initialState = {
    latLong: '',
    coffeeStores: [],
  };
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
