import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    span {
      font-weight: 600;
      color: var(--color-primary);
    }
  }
  div:first-child {
    padding: 10px;
  }
`;

export const InputContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: 4px;
  width: 852px;
  height: 100px;
  border: 1px solid #f4f5f7;

  :focus-within {
    background-color: transparent;
    border: 1px solid var(--color-primary);
    transition: 0.5s;
    &::placeholder {
      transition: 0.5s;
      padding: 10px;
    }
  }
  textarea {
    font-family: "Mulish", sans-serif;
    padding: 10px;
    width: 100%;
    height: 100%;
    border: transparent;
    resize: none;
  }
`;
