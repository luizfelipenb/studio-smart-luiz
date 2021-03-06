import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 5px;
  width: 100px;
  color: var(--white);
  background-color: var(--color-primary);
  transition: 0.25s;
  gap: 10px;
  font-weight: 600;
  div:first-child {
    button {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  div {
    margin: 0, auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      transition: 0.25s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      background-color: transparent;
      border: none;
      color: var(--white);
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
`;
