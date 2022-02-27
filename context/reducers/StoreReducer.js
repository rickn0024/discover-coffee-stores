import { ACTION_TYPES } from '../types/StoreTypes';

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      return { ...state, latLong: action.payload.latLong };
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      return { ...state, coffeeStores: action.payload.coffeeStores };
    }
    default: {
      throw new Error(`Invalid action type: ${action.type}`);
    }
  }
};
export default storeReducer;
