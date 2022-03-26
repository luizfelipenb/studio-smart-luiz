import styled from "styled-components";

export const Container = styled.li`
  width: 380px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h3 {
      color: #808080;
    }
    > button {
      cursor: pointer;
      width: 22px;
      margin: 0px;
      color: #808080;
      background-color: transparent;
      border: transparent;
    }
  }
`;

export const CardContainer = styled.section`
  width: 380px;
  background-color: rgba(119, 22, 204, 0.02);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  > button {
    margin-top: 1rem;
  }
`;
