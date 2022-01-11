import React from "react";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

import ProductSlider from "../components/ProductSlider";
import Bar from "./Bar";

const MissionCard = styled.section`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  flex: 1;
  padding: 2rem;
`;

function ProductList() {
  return (
    <MissionCard>
      <div
        className="flex  flex-column  flex-justify-content-center "
        style={{ maxWidth: "33rem" }}
      >
        <h1 className="fs-800 text-secondary">Our Products</h1>
        <Bar />
        <h5 className="fs-300 text-tertiary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h5>
      </div>
      <div style={{ marginTop: "0.5rem" }}></div>

      <ProductSlider deviceType={"desktop"} />
    </MissionCard>
  );
}

export default ProductList;
