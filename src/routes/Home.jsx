import { useState, useMemo, useTransition } from "react";
import styled from "styled-components";
import CreateToDo from "../component/CreateToDo";
import Header from "../component/Header";
import ListToDo from "../component/ListToDo";

const Container = styled.div`
  width: 660px;
  height: 100vh;
  margin: 0 auto;
`;

export default function Home() {
  const [toDo, setToDo] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [isPending] = useTransition({ timeoutMs: 1500 });

  const list = useMemo(() => {
    if (keyword === " ") {
      return toDo;
    } else {
      return toDo.filter((toDo) => toDo.includes(keyword));
    }
  }, [keyword, toDo]);
  return (
    <Container>
      <Header title="ToDos.." setKeyword={setKeyword} />
      <CreateToDo setToDo={setToDo} />
      {isPending && <div>loading...</div>}
      <ListToDo toDo={list} />
    </Container>
  );
}
