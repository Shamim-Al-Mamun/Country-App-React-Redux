import {
  FAVOURITE_COUNTRY_ENTRY,
  FAVOURITE_COUNTRY_DELETE,
} from "./favouriteCountriesTypes";

export const favouriteCountryEntry = (countries) => {
  return {
    type: FAVOURITE_COUNTRY_ENTRY,
    payload: countries,
  };
};

export const favouriteCountryDelete = (countries) => {
  return {
    type: FAVOURITE_COUNTRY_DELETE,
    payload: countries,
  };
};
