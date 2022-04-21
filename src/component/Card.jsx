import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid tomato;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card(props) {
  return <Wrapper>{props.toDo}</Wrapper>;
}

export default React.memo(Card);
