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
function ContactUs() {
  return (
    <MissionCard>
      <div className="flex  flex-column  flex-justify-content-center ">
        <h1 className="fs-800 text-secondary">Contact Information</h1>
        <Bar />

        <h3>Factory Address</h3>
        <h5 className="fs-300 text-tertiary">
          D-21/A/1. SITE, Super Highway - Karachi.
        </h5>

        <h3> Phone No: </h3>
        <h5 className="fs-300 text-tertiary">+92-021-36411503-5</h5>

        <h3> E-mail</h3>
        <h5 className="fs-300 text-tertiary">info@apexpharmapk.com</h5>

        <h3>URL</h3>
        <h5 className="fs-300 text-tertiary">
          https://apexpharmapk.com/contact.html
        </h5>
      </div>
    </MissionCard>
  );
}

export default ContactUs;
