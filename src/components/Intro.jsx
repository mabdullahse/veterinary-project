import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Bar from "./Bar";
const MissionCard = styled.section`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  flex: 1;
  padding: 2rem;
  & img {
    height: auto;
  }
`;
function Intro() {
  return (
    <MissionCard>
      <h3 className="fs-600 text-primary mb-1">Who are we? </h3>
      <Bar />
      <div className="flex">
        <p className="fs-400 text-tertiary mt-1 ">
          Apex is dedicated to enhancing human life through developing &
          manufacturing quality pharmaceutical products. The company was
          established in 2005 and started its sales & marketing operation in 12
          mega cities of Pakistan with its head office in Karachi. Fulfilling
          our vision to serve the nation with effective & quality pharmaceutical
          medicines, our manufacturing facility starts its operation in the year
          2010. We manufacture high-quality branded generics, at our
          cGMP-compliant facility in Pakistan. Licensors, molecule owners and
          inventors from around the world can avail our toll manufacturing
          and/or licensing services.
        </p>

        <Link to="/">
          <img
            src="./assets/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </Link>
      </div>
    </MissionCard>
  );
}

export default Intro;
