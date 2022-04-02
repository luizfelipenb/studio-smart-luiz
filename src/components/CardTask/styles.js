import styled from "styled-components";

export const Container = styled.section`
  width: 348px;
  height: 180px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    width: 100%;
    padding: 7px 10px;
    color: #333;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const CategoryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ul {
    width: 100%;
    display: flex;

    li {
      :first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-primary);
        width: 84px;
        height: 25px;
        background-color: rgba(119, 22, 204, 0.1);
        border-radius: 2px;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
      }
      > button {
        cursor: pointer;
        color: var(--color-primary);
        width: 24px;
        height: 24px;
      }
    }
    li + li {
      margin-left: 10px;
    }
  }
  > button {
    cursor: pointer;
    color: #808080;
    background-color: transparent;
    border: transparent;
    padding: 10px;
  }
`;

export const InformationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 1rem;
  > section {
    width: 115px;
  }
  > button {
    width: 32px;
    height: 32px;
  }
`;
