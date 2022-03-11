import styled from "styled-components";

export const Container = styled.label`
  width: 48px;
  height: 24px;
  border: 1px solid var(--grey);
  border-radius: 100px;
  background-color: ${(props) =>
    !!props.isChecked ? "#7716CC" : "transparent"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  cursor: pointer;
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  span {
    position: absolute;
    background-color: var(--color-primary);
    width: 18px;
    height: 18px;
    border-radius: 100%;
    padding: 5px;
    left: 0;
    margin-left: 3px;
    transition: 0.25s;
  }

  input:checked + span {
    left: 50%;
    margin-right: 3px;
    background-color: var(--white);
  }

  input:checked ~ label {
    background-color: var(--color-primary);
  }
`;
