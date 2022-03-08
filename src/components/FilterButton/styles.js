import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 5px;
  width: 100px;
  color: var(--color-primary);
  background-color: rgba(119, 22, 204, 0.1);
  transition: 0.25s;
  gap: 10px;
  font-weight: 500;

  div {
    margin: 0, auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      background-color: transparent;
      border: none;
      color: var(--color-primary);
    }
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    li {
      margin-left: 0.7rem;
    }
  }
`;
