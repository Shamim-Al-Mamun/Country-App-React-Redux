import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Header/Nav";
import Title from "./components/Header/Title";
import SearchBar from "./components/Header/SearchBar";
import CountriesContainer from "./components/Body/CountriesContainer";
import FavouriteCountriesContainer from "./components/Body/FavouriteCountriesContainer";

const App = () => {
  return (
    <>
      <Router>
        <Title />
        <SearchBar />
        <Nav />
        <Routes>
          <Route path="/" element={<CountriesContainer />} />
          <Route path="/favourites" element={<FavouriteCountriesContainer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
