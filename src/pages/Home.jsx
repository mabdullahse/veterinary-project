import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Specialization from "../components/Specialization";
import ContactUs from "../components/ContactUs";
import ProductList from "./../components/ProductList";
import Header from "./../components/Header";
import HeaderDashboard from "./../components/HeaderDashboard";
import Mission from "./../components/Mission";
import CeoMessage from "./../components/CeoMessage";
import Intro from "./../components/Intro";
import AboutUs from "./../components/AboutUs";

export class Home extends Component {
  render() {
    return (
      <div className="flow" style={{ "--flow-space": "5rem" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          >
           
            <Route
              index
              element={
                <>
                  <HeaderDashboard />
                  <br />
                  <Intro />{" "}
                </>
              }
            />

            <Route path="mission" element={<Mission />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/ceo-message" element={<CeoMessage />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default Home;
{
  /* <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/mission">Mission</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="/about-us">About Us</StyledLink>
          </li>
          <li>
            <StyledLink to="/ceo-message">CEO Message</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact-us">Contact Us</StyledLink> */
}
