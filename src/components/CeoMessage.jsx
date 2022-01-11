import React from "react";
import styled from "styled-components";

import Bar from "../components/Bar";

const MissionCard = styled.section`
  display: flex;
  gap: 3rem;
  & > div {
    flex: 1;
    padding: 2rem;
  }
  & > div:last-child {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

function CeoMessage() {
  return (
    <MissionCard className=" flex flex-space-between ">
      {/* <div>
        <img
          src="assets/ceo.svg"
          alt="Doctor Smiling"
          style={{ maxWidth: "77%", marginRight: "auto" }}
        />
      </div> */}
      <div className="flex  flex-column  flex-justify-content-center ">
        <h1 className="fs-800 text-secondary">Meet Our CEO </h1>
        <Bar />
        <p className="fs-300 text-tertiary">
          Good Health is indeed a magnificent human possession. And any
          contribution towards the preservation and consolidation of this
          blessing is the noblest service to humanity. Motivated by this spirit
          Apex Pharmaceutical (Pvt) Ltd. was founded in the year 2007.
        </p>
        <p className="fs-300 text-tertiary">
          The Primary objective was obviously to manufacture effective,
          reliable, and safe pharmaceutical products of high quality. The
          beginning, no doubt, was modest. But that proved to be a period of
          little accomplishments having far reaching effects on the will to do
          more.
        </p>
      </div>
    </MissionCard>
  );
}

export default CeoMessage;
