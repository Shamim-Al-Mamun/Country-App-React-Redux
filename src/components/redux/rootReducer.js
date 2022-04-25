import { combineReducers } from "redux";

import countriesReducer from "./Countries/countriesReducer";
import favouriteCoutriesReducer from "./FavouriteCountries/favouriteCountriesReducer";

const rootReducer = combineReducers({
  countries: countriesReducer,
  favourite_countries: favouriteCoutriesReducer,
});

export default rootReducer;
