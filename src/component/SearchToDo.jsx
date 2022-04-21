import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 180px;
  height: 30px;
  border: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

/*
state 업데이트 automatic batching
*/
function SearchToDo({ setKeyword }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "" || value === null) {
      return;
    }

    setKeyword(value);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="검색어를 입력하세요."
      />
    </Form>
  );
}

export default React.memo(SearchToDo);
