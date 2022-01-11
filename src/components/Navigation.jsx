import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #737373;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.primaryColor};
  }

  &.active {
  }
`;

function Navigation() {
  return (
    <nav>
      <ul className="primary-navigation  flex">
        <li>
          <StyledLink to="/" activeClassName="active">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mission" activeClassName="active">
            Mission
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/products" activeClassName="active">
            Products
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about-us" activeClassName="active">
            About Us
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/ceo-message" activeClassName="active">
            CEO Message
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/contact-us" activeClassName="active">
            Contact Us
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
