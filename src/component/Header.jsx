import styled from "styled-components";
import SearchToDo from "./SearchToDo";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export default function Header({ title, setKeyword }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SearchToDo setKeyword={setKeyword} />
    </Wrapper>
  );
}
