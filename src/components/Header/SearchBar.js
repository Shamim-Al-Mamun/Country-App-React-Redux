import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

//importing actions from redux
import { searchCountriesList } from "../redux/Countries/countriesAction";
import { searchFilterCountryList } from "../redux/Countries/countriesAction";
import { searchedText } from "../redux/Countries/countriesAction";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  //connecting redux store
  const dispatch = useDispatch();
  const CountriesStatus = useSelector((state) => state.countries);
  const { countries, tempCountries, searchTexts } = CountriesStatus;

  const handleChange = (e) => {
    let text = e.target.value;
    setSearchText(text.toLowerCase());
    console.log(searchTexts);
  };

  useEffect(() => {
    if (!tempCountries.length) {
      const newCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchText);
      });
      //searched countries
      dispatch(searchCountriesList(newCountries));
    } else {
      const newCountries = tempCountries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchText);
      });
      //searched countries after adding favourites
      dispatch(searchFilterCountryList(newCountries));
    }
    //searched keywords
    dispatch(searchedText(searchText));
  }, [searchText]);

  return (
    <Container className="m-auto w-100">
      <div className="search m-auto col-sm-6 col-md-8 col-lg-4 p-3">
        <div class="input-group mb-3">
          <span class="input-group-text p-2 searchIcon" id="basic-addon1">
            <Search />
          </span>
          <input
            type="text"
            className="form-control p-2 searchInput"
            placeholder="name a country"
            aria-label="country"
            aria-describedby="basic-addon1"
            value={searchText}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>
    </Container>
  );
};

export default SearchBar;
