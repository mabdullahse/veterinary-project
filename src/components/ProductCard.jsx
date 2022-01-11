import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 5px;
  width: 15rem;
  border-radius: 5px;
`;
function ProductCard({ image }) {
  console.log(image);
  return (
    <Card>
      <img src={image} className="product-img" />
      <h6 className="fs-500 text-primary m-0">Panadol</h6>
      <p className="fs-300 text-tertiary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        omnis.
      </p>
    </Card>
  );
}

export default ProductCard;
