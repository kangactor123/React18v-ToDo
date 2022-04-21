import styled from "styled-components";
import React from "react";
import Card from "./Card";

const Wrapper = styled.div`
  width: 100%;
`;

const List = styled.li`
  list-style: none;
  margin: 10px 0;
`;

/*
props : toDo(type: string[])
*/

function ListToDo(props) {
  return (
    <Wrapper>
      <ul>
        {props.toDo.map((toDo) => {
          return (
            <List key={Date.now()}>
              <Card toDo={toDo} />
            </List>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default React.memo(ListToDo);
