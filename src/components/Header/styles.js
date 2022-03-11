import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  section {
    display: flex;
    width: fit-content;
    :first-child {
      width: 1035px;
      border-right: 1px solid #dfdfdf;
      display: flex;
      align-items: center;
      gap: 20px;
      button {
        margin-left: 2rem;
        width: 25px;
        height: 25px;
        background-color: transparent;
        border: transparent;
        color: #808080;
        cursor: pointer;
        :hover {
          color: var(--color-primary);
          transition: 0.5s;
        }
      }
      input {
        margin-top: 10px;
        height: 40px;
        width: 300px;
        border: none;
        font-size: 18px;
        ::placeholder {
          color: #808080;
          font-size: 20px;
        }
      }
    }
  }
  section {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 100%;
      border-right: 1px solid #dfdfdf;
      color: #808080;
      :hover {
        color: var(--color-primary);
        transition: 0.5s;
      }
      cursor: pointer;
      :nth-child(3) {
        cursor: default;
        width: auto;
        gap: 10px;
        h3 {
          font-weight: 500;
          font-size: 16px;
          line-height: 120%;
        }
        button {
          margin-top: 5px;
          cursor: pointer;
          background-color: transparent;
          border: transparent;
        }
      }
    }
  }
`;
