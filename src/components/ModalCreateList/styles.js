import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 900px;
    background: #ffffff;
    border-radius: 4px;
    height: 310px;
    > form {
      width: 95%;

      :first-child {
        display: flex;
        justify-content: space-between;
        border: none;

        > button {
          background-color: transparent;
          border: transparent;
          color: #808080;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

export const NavHandleCreate = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  > div {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    > button {
      cursor: pointer;
      width: 140px;
      height: 48px;
      color: var(--color-primary);
      font-weight: 500;
      font-size: 18px;
      border-radius: 12px;
      background-color: transparent;
      border: transparent;
      :hover {
        color: rgba(119, 22, 204, 0.7);
        transition: 0.5s;
      }
      :last-child {
        background-color: var(--color-primary);
        color: #fff;
        :hover {
          background-color: rgba(119, 22, 204, 0.7);
          transition: 0.5s;
        }
      }
    }
  }
`;
