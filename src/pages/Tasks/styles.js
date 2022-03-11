import styled from "styled-components";

export const Container = styled.section``;

export const HeaderContainer = styled.header`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  height: 180px;
  display: flex;
  justify-content: space-evenly;

  flex-direction: column;
  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    span {
      :first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-primary);
        width: 40px;
        height: 40px;
        background-color: #f9f9f9;
        border-radius: 100%;
        margin-top: 1.3rem;
        margin-right: 1rem;
      }
    }
    div {
      display: flex;
      gap: 10px;
      margin-left: 1.5rem;
      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background-color: var(--color-primary);
        img {
          width: 42px;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        h2 {
          font-weight: 600;
          font-size: 20px;
          line-height: 120%;

          color: #1d1d1d;
        }
        span {
          font-weight: 600;
          font-size: 16px;
          line-height: 120%;

          color: #808080;
        }
      }
    }
    div {
      margin-right: 1.5rem;
      button {
        width: 169px;
      }
    }
  }
  section {
    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 1rem;
      margin-left: 1.5rem;
      position: absolute;
      li {
        cursor: pointer;
        position: relative;
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
        color: #1d1d1d;
        transition: 0.5s;
        :hover {
          color: var(--color-primary);
          transition: 0.5s;
          border-bottom: 2px solid var(--color-primary);
          padding-bottom: 0.8rem;
        }
      }
    }
  }
`;

export const ListSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  ul {
    width: 100%;
    display: flex;
    max-height: 692px;
    padding: 1rem;
    > button {
      margin-top: 2.5rem;
      margin-left: 1rem;
      width: 248px;
      height: 42px;
    }
  }
`;
