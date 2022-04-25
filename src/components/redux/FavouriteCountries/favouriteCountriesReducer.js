import {
  FAVOURITE_COUNTRY_ENTRY,
  FAVOURITE_COUNTRY_DELETE,
} from "./favouriteCountriesTypes";

const initialFavouriteCountriesState = {
  favouritesList: [],
  filteredfavouritesList: [],
  tempfavouriteList: [],
};

const favouriteCoutriesReducer = (
  state = initialFavouriteCountriesState,
  action
) => {
  switch (action.type) {
    case FAVOURITE_COUNTRY_ENTRY:
      return {
        ...state,
        favouritesList: action.payload,
        tempfavouriteList: action.payload,
      };
    case FAVOURITE_COUNTRY_DELETE:
      return {
        ...state,
        favouritesList: action.payload,
        tempfavouriteList: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteCoutriesReducer;
