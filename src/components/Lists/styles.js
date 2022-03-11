import styled from "styled-components";

export const Container = styled.li`
  :last-child {
    width: 380px;
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      h3 {
        width: 30px;
      }
      button {
        width: 21px;
        height: 10px;
        background-color: transparent;
        border: transparent;
      }
    }
  }
`;
