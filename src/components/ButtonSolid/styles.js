import styled from "styled-components";

export const Container = styled.button`
  width: 300px;
  height: 51px;
  border-radius: 12px;
  border: transparent;
  background-color: var(--color-rgba-purple-10);
  color: var(--color-primary);
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-rgba-purple-20);
  }
`;
