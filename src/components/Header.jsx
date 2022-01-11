import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import Navigation from "./Navigation";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.outline ? props.theme.colors.light : props.theme.colors.primaryColor};
  color: ${(props) =>
    props.outline ? props.theme.colors.primaryColor : props.theme.colors.light};

  padding: 0.25em 2em;
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: 3px;
`;

function Header() {
  return (
    <div>
      <header
        className="flex  flex-space-between flex-align-center "
        style={{ minHeight: "4rem" }}
      >
        <Link to="/">
          <img
            src="./assets/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </Link>
        <Navigation />

        {/* <div className="flex">
          <Button>Log in</Button>
          <Button outline>Join us</Button>
        </div> */}
      </header>
      <br />
      <Outlet />
    </div>
  );
}

export default Header;
