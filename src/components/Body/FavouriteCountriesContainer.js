import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, CloseButton, Container } from "react-bootstrap";
import {
  People,
  CurrencyExchange,
  Building,
  PinMap,
} from "react-bootstrap-icons";

//importing actions from redux
import { favouriteCountryDelete } from "../redux/FavouriteCountries/favouriteCountriesActions";
import { restoreFavouriteCountry } from "../redux/Countries/countriesAction";

function FavouriteCountriesContainer() {
  //connecting redux store
  const dispatch = useDispatch();
  const FavouriteCountriesStatus = useSelector(
    (state) => state.favourite_countries
  );
  const { favouritesList, tempfavouriteList } = FavouriteCountriesStatus;
  const CountriesStatus = useSelector((state) => state.countries);
  const { tempCountries, searchTexts } = CountriesStatus;

  if (searchTexts) {
    //searched keyword wise filter
    var newFilteredCountries = tempfavouriteList.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(searchTexts);
    });
  } else {
    newFilteredCountries = tempfavouriteList;
  }
  //searched keyword wise filter favourite countries
  var FavouriteCountries = newFilteredCountries.map((country) => {
    const { name, flags, capital, population, currencies, continents } =
      country;
    if (currencies && !(typeof Object.values(currencies)[0] === "undefined")) {
      var currency = Object.values(currencies)[0];
      var currencyName = currency.name;
    }

    const handleRemoveCountry = (name) => {
      const filter = favouritesList.filter(
        (country) => country.name.common !== name
      );
      //deleting countries from favourite
      dispatch(favouriteCountryDelete(filter));
    };

    const handleFavouriteCountry = (name) => {
      const filter = favouritesList.filter(
        (country) => country.name.common === name
      );
      //removing countries from favourites
      dispatch(restoreFavouriteCountry([...tempCountries, filter[0]]));
      console.log(tempCountries);
    };
    return (
      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="card bg-info m-2 singleCard">
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
            className="p-1"
            id="Fav-btn"
            variant="danger"
            onClick={() => {
              handleFavouriteCountry(name.common);
              handleRemoveCountry(name.common);
            }}
          >
            Delete from favourite{" "}
          </Button>
        </div>
      </div>
    );
  });
  return (
    <Container className="m-auto countries">
      {Boolean(FavouriteCountries.length) ? (
        <div className="row text-center m-auto">{FavouriteCountries}</div>
      ) : (
        searchTexts &&
        Boolean(tempfavouriteList.length) && (
          <p className="text-center text-danger my-3">no country found</p>
        )
      )}
      {!Boolean(tempfavouriteList.length) && (
        <>
          <p className="text-center text-danger my-3">
            currently no favourite countries
          </p>
          <div className="text-center">
            <a href="/">Go to Home</a>
          </div>
        </>
      )}
    </Container>
  );
}

export default FavouriteCountriesContainer;
