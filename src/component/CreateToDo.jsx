import styled from "styled-components";
import React, { startTransition, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const CreateForm = styled.form`
  width: 100%;
  height: 40px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  border: 1px solid gray;
  border-radius: 15px;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;

const CreateBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 15px;
  border: 0;
  background-color: tomato;
  color: white;
`;

function CreateToDo({ setToDo }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "") {
      alert("ToDo를 입력해주세요");
      return;
    }
    startTransition(() => {
      setToDo((prev) => {
        return [...prev, value];
      });
    });

    setValue("");
  };
  return (
    <Wrapper>
      <CreateForm onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="ToDo를 입력해주세요"
        />
        <CreateBtn>Create</CreateBtn>
      </CreateForm>
    </Wrapper>
  );
}

export default React.memo(CreateToDo);
