import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Star, StarFill, House, HouseFill } from "react-bootstrap-icons";

function Nav() {
  const [activeFavourite, setActiveFavourite] = useState(false);
  const [activeHome, setActiveHome] = useState(true);
  return (
    <Container className="mb-lg-1 m-auto w-75 user-select-none rounded nav py-2 bg-light ">
      <div className="rounded text-light mx-3">
        <Link
          to="/"
          className="text-dark text-decoration-none px-4"
          onClick={() => {
            setActiveFavourite(false);
            setActiveHome(true);
          }}
        >
          <span className="text-info home">
            {activeHome ? <HouseFill /> : <House />}
          </span>{" "}
          Home
        </Link>
        <Link
          to="/favourites"
          className="text-dark text-decoration-none"
          onClick={() => {
            setActiveFavourite(true);
            setActiveHome(false);
          }}
        >
          <span className="text-info star">
            {activeFavourite ? <StarFill /> : <Star />}
          </span>{" "}
          <span className="">Favourites</span>
        </Link>
      </div>
    </Container>
  );
}

export default Nav;
