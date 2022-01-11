import React from "react";
import styled from "styled-components";

import Bar from "./Bar";

const MissionCard = styled.section`
  display: flex;
  gap: 3rem;
  & > div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    flex: 1;
    padding: 2rem;
  }
`;
function Mission() {
  return (
    <MissionCard>
      <div className="flex  flex-column  flex-justify-content-center ">
        <h1 className="fs-800 text-secondary">Our Mission</h1>
        <Bar />
        <p className="fs-300 text-tertiary">
          "Apex Pharmaceuticals upholds its mission statement—which consists of
          its mission, its core values and its envisioned future—in order to be
          a business that meets a diverse array of stakeholder expectations as
          it realizes its corporate responsibility to society. It is on the
          basis of this mission statement that Apex Pharmaceuticals conducts its
          business operations."
        </p>

        <h3 className="fs-500  "> Mission Statement</h3>
        <p className="fs-300 text-tertiary">
          Apex's mission is to dedicate itself to adding exceptional value
          through the creation of effective medical products for the benefit of
          the medical community and human health around the world.
        </p>

        <h3 className="fs-500  "> Core values</h3>
        <p className="fs-300 text-tertiary">
          <p>
            The primary focus of all our activities is patients and customers
          </p>
          <ul>
            <li>
              In all our activities we are committed to the highest ethical and
              moral standards.
            </li>
            <li>
              We value employees who develop profound expertise and broad
              perspectives and pursue innovation and challenges without fear of
              failure.
            </li>
            <li>
              Wherever we operate around the world we seek to understand and
              respect people and cultures and to behave as good corporate
              citizens.
            </li>
            <li>
              We promote an open and active corporate culture that respects
              individuality, ability and teamwork. We care about the global
              environment.
            </li>
          </ul>
        </p>
      </div>
    </MissionCard>
  );
}

export default Mission;
