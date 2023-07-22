/* eslint-disable */
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";

import logo from "../../assets/images/logos/BIOMNIA_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="top" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar]">
            <NavbarBrand href="/">
              <img src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            >
              <Nav navbar className="ms-auto">
                <NavItem>
                  <Link className="nav-link" to={"/"}>
                    Biomnia
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={"/custom-components"}>
                    Biospectrum
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <Link
                  to="https://biomnia.netlify.app/home/app"
                  className="btn btn-success-gradiant font-14"
                >
                  Go to Biomnia
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
