import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: black;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &[type="checkbox"] {
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;

    cursor: pointer;
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    font-size: 20px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export default function Create() {
  const [title, setTitle] = useState<string>();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    console.log(title);
  };

  return (
    <Wrapper>
      <Title>Create</Title>
      <Input placeholder="할 일을 입력해주세요." onChange={onChangeTitle} />
      <CheckWrapper>
        <label htmlFor="check">이 일을 완료했나요?</label>
        <Input type="checkbox" id="check" />
      </CheckWrapper>

      <Button onClick={onSubmit}>할 일 추가하기</Button>
    </Wrapper>
  );
}
