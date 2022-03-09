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
  height: 48px;
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
  input {
    padding: 0 10px;
    width: 100%;
    height: 100%;
    border: transparent;
  }

  select {
    padding: 0 10px;
    width: 100%;
    height: 100%;
    border: transparent;
    background-color: #f4f5f7;
    color: #808080;

    option {
      background-color: #f4f5f7;
    }
  }
`;
