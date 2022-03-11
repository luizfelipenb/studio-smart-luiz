import styled, { css } from "styled-components";

export const Container = styled.aside`
  width: 380px;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #dfdfdf;
  transition: 1s;
  ${(props) =>
    !!props.showNav
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};
  img {
    width: 38px;
    height: 38px;
    margin: 10px;
    cursor: pointer;
  }
  nav {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      li {
        cursor: pointer;
        width: 300px;
        height: 60px;
        margin-top: 10px;
        display: flex;
        gap: 20px;
        align-items: center;
        border-radius: 4px;
        font-weight: 700;
        font-size: 16px;
        padding-left: 10px;

        :active {
          background-color: var(--color-primary);
          color: #fff;
        }
        :hover {
          transition: 0.35s;
          background-color: var(--color-primary);
          color: #fff;
        }
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 200px;

    ul {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      li {
        width: 100%;
        display: flex;

        align-items: center;
        justify-content: space-between;
      }
    }
    div {
      width: 300px;
      height: 1px;
      background-color: rgba(119, 22, 204, 0.5);
      border-radius: 100px;
    }
    button {
      margin-bottom: 1rem;
    }
  }
`;
