import axios from "axios";

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SEARCH_COUNTRIES_LIST,
  FILTER_COUNTRY_LIST,
  SEARCH_FILTER_COUNTRY_LIST,
  SEARCHED_TEXT,
  RESTORE_FAVOURITE_COUNTRY,
} from "./countriesTypes";

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};
export const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};
export const fetchCountriesFailure = (error) => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};
export const searchedText = (text) => {
  return {
    type: SEARCHED_TEXT,
    payload: text,
  };
};
export const searchCountriesList = (countries) => {
  return {
    type: SEARCH_COUNTRIES_LIST,
    payload: countries,
  };
};

export const filterCountryList = (countries) => {
  return {
    type: FILTER_COUNTRY_LIST,
    payload: countries,
  };
};
export const searchFilterCountryList = (countries) => {
  return {
    type: SEARCH_FILTER_COUNTRY_LIST,
    payload: countries,
  };
};
export const restoreFavouriteCountry = (countries) => {
  return {
    type: RESTORE_FAVOURITE_COUNTRY,
    payload: countries,
  };
};

//Async API Call
//Fetching data
export const fetchCountries = () => {
  return function (dispatch) {
    dispatch(fetchCountriesRequest());
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const countries = res.data;
        console.log(countries);
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((err) => {
        dispatch(fetchCountriesFailure(err.message));
      });
  };
};
