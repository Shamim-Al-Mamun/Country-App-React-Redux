import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SEARCHED_TEXT,
  SEARCH_COUNTRIES_LIST,
  FILTER_COUNTRY_LIST,
  SEARCH_FILTER_COUNTRY_LIST,
  RESTORE_FAVOURITE_COUNTRY,
} from "./countriesTypes";

const initialCountriesState = {
  loading: false,
  countries: [],
  displayCountries: [],
  filteredCountries: [],
  tempCountries: [],
  error: "",
  searchTexts: "",
};

const countriesReducer = (state = initialCountriesState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        displayCountries: action.payload,
        error: "",
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload,
      };
    case SEARCHED_TEXT:
      return {
        ...state,
        searchTexts: action.payload,
      };
    case SEARCH_COUNTRIES_LIST:
      return {
        ...state,
        loading: false,
        displayCountries: action.payload,
      };
    case FILTER_COUNTRY_LIST:
      return {
        ...state,
        loading: false,
        filteredCountries: action.payload,
        tempCountries: action.payload,
      };
    case SEARCH_FILTER_COUNTRY_LIST:
      return {
        ...state,
        loading: false,
        displayCountries: [],
        filteredCountries: action.payload,
      };
    case RESTORE_FAVOURITE_COUNTRY:
      return {
        ...state,
        tempCountries: action.payload,
        filteredCountries: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
