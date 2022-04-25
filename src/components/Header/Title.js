import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Title() {
  return (
    <Navbar
      className="user-select-none d-flex justify-content-center"
      collapseOnSelect
      expand="lg"
      bg="info"
      variant="dark"
      fixed="top"
    >
      <Nav>
        <Nav.Link href="/">
          <h2 className="text-light p-3">Country App</h2>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Title;
