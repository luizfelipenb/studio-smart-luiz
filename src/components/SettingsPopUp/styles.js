import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 64px;
  color: #fff;
  background: #7716cc;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  gap: 10px;
  align-self: flex-end;
  margin-right: ${({ isList }) => (isList ? "0" : "10px")};
  span {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
