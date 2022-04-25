import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, CloseButton, Container, Spinner } from "react-bootstrap";
import {
  People,
  CurrencyExchange,
  Building,
  PinMap,
} from "react-bootstrap-icons";

//importing actions from redux
import { fetchCountries } from "../redux/Countries/countriesAction";
import { filterCountryList } from "../redux/Countries/countriesAction";
import { favouriteCountryEntry } from "../redux/FavouriteCountries/favouriteCountriesActions";

function CountriesContainer() {
  //connecting redux store
  const dispatch = useDispatch();
  const CountriesStatus = useSelector((state) => state.countries);
  const {
    displayCountries,
    loading,
    error,
    filteredCountries,
    tempCountries,
    searchTexts,
    countries,
  } = CountriesStatus;
  const FavouriteCountriesStatus = useSelector(
    (state) => state.favourite_countries
  );
  const { favouritesList } = FavouriteCountriesStatus;

  useEffect(() => {
    //fetch data
    dispatch(fetchCountries());
  }, []);

  if (tempCountries.length) {
    if (searchTexts) {
      //searched keyword wise filter
      var newFilteredCountries = filteredCountries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchTexts);
      });
    } else {
      newFilteredCountries = filteredCountries;
    }
    //searched keyword wise filter countries after adding to favourites
    var FilteredCountriesList = newFilteredCountries.map((country) => {
      const { name, flags, capital, population, currencies, continents } =
        country;
      if (
        currencies &&
        !(typeof Object.values(currencies)[0] === "undefined")
      ) {
        var currency = Object.values(currencies)[0];
        var currencyName = currency.name;
      }
      const handleRemoveCountry = (name) => {
        console.log(name);
        const filter = tempCountries.filter(
          (country) => country.name.common !== name
        );
        //removing countries
        dispatch(filterCountryList(filter));
      };
      const handleFavouriteCountry = (name) => {
        const filter = tempCountries.filter(
          (country) => country.name.common === name
        );
        //adding to the favourites
        dispatch(favouriteCountryEntry([...favouritesList, filter[0]]));
      };
      return (
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div className="card bg-info m-3 singleCard">
            <div className="small text-end me-1">
              <span
                className="btn"
                onClick={() => {
                  handleRemoveCountry(name.common);
                }}
              >
                <CloseButton />
              </span>
            </div>
            <img
              src={flags.png}
              alt={name.common}
              className="card-img-top px-2"
            />
            <h5 className="card-title mb-1">{name.common}</h5>
            <div className="p-2 bg-primary m-1 text-white rounded text-start">
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <People />
                  </span>
                  <span className="ms-2">Population: </span>
                </div>
                <div className="col-6 small">
                  {" "}
                  <span className="text-warning">{population}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <PinMap />
                  </span>
                  <span className="ms-2">Continent: </span>
                </div>
                <div className="col-6 small">
                  <span className="text-warning">{continents}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <Building />
                  </span>
                  <span className="ms-2">Capital: </span>
                </div>
                <div className="col-6 small">
                  <span className="text-warning">{capital}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <CurrencyExchange />
                  </span>
                  <span className="ms-2">Currency: </span>
                </div>
                <div className="col-6 small">
                  {" "}
                  <span className="text-warning">{currencyName}</span>
                </div>
              </div>
            </div>

            <Button
              id="Fav-btn"
              variant="danger"
              className="p-1"
              onClick={() => {
                handleFavouriteCountry(name.common);
                handleRemoveCountry(name.common);
              }}
            >
              Add to Favourite{" "}
            </Button>
          </div>
        </div>
      );
    });
  } else {
    if (searchTexts) {
      console.log(searchTexts);
      //searched keyword wise filter
      var newCountries = displayCountries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchTexts);
      });
    } else {
      newCountries = displayCountries;
    }
    //searched keyword wise filter countries before adding to favourites
    var CountriesList = newCountries.map((country) => {
      const { name, flags, capital, population, currencies, continents } =
        country;
      if (
        currencies &&
        !(typeof Object.values(currencies)[0] === "undefined")
      ) {
        var currency = Object.values(currencies)[0];
        var currencyName = currency.name;
      }
      const handleRemoveCountry = (name) => {
        console.log(name);
        if (searchTexts) {
          const filter = countries.filter(
            (country) => country.name.common !== name
          );
          //deleting countries from all
          dispatch(filterCountryList(filter));
        } else {
          const filter = displayCountries.filter(
            (country) => country.name.common !== name
          );
          //removing countries from all
          //adding to the favourites
          dispatch(filterCountryList(filter));
          console.log(filteredCountries);
        }
      };
      const handleFavouriteCountry = (name) => {
        const filter = displayCountries.filter(
          (country) => country.name.common === name
        );
        //adding to the favourites
        dispatch(favouriteCountryEntry([...favouritesList, filter[0]]));
      };
      return (
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div className="card bg-info m-3 singleCard">
            <div className="small text-end me-1">
              <span
                className="btn"
                onClick={() => {
                  handleRemoveCountry(name.common);
                }}
              >
                <CloseButton />
              </span>
            </div>
            <img
              src={flags.png}
              alt={name.common}
              className="card-img-top px-2"
            />
            <h5 className="card-title mb-1">{name.common}</h5>
            <div className="p-2 bg-primary m-1 text-white rounded text-start">
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <People />
                  </span>
                  <span className="ms-2">Population: </span>
                </div>
                <div className="col-6 small">
                  {" "}
                  <span className="text-warning">{population}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <PinMap />
                  </span>
                  <span className="ms-2">Continent: </span>
                </div>
                <div className="col-6 small">
                  <span className="text-warning">{continents}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <Building />
                  </span>
                  <span className="ms-2">Capital: </span>
                </div>
                <div className="col-6 small">
                  <span className="text-warning">{capital}</span>
                </div>
              </div>
              <div className="row small">
                <div className="col-6">
                  <span className="text-dark">
                    <CurrencyExchange />
                  </span>
                  <span className="ms-2">Currency: </span>
                </div>
                <div className="col-6 small">
                  {" "}
                  <span className="text-warning">{currencyName}</span>
                </div>
              </div>
            </div>

            <Button
              id="Fav-btn"
              className="p-1"
              variant="danger"
              onClick={() => {
                handleRemoveCountry(name.common);
                handleFavouriteCountry(name.common);
              }}
            >
              Add to Favourite{" "}
            </Button>
          </div>
        </div>
      );
    });
  }
  return loading ? (
    <div className="text-center pt-5">
      <Spinner animation="border" variant="info" />
    </div>
  ) : error ? (
    <p className="text-danger text-center">{error}</p>
  ) : (
    <Container className="m-auto">
      <div className="row text-center m-auto">
        {FilteredCountriesList ? FilteredCountriesList : CountriesList}
        {typeof FilteredCountriesList === "undefined" &&
          !(typeof CountriesList === "undefined") &&
          !CountriesList.length && (
            <p className="text-center text-danger my-3">no country found</p>
          )}
        {typeof CountriesList === "undefined" &&
          !(typeof FilteredCountriesList === "undefined") &&
          !FilteredCountriesList.length && (
            <p className="text-center text-danger my-3">no country found</p>
          )}
      </div>
    </Container>
  );
}

export default CountriesContainer;
