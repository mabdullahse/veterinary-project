import React from "react";
import styled from "styled-components";

function Bar() {
  const Line = styled.div`
    width: 5rem;
    background-color: ${(props) => props.theme.colors.primaryColor};
    height: 7px;
    border-radius: 5px;
  `;
  return <Line />;
}

export default Bar;
