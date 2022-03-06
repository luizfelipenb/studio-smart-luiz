import styled from "styled-components";

export const Container = styled.button`
  width: 300px;
  height: 51px;
  border-radius: 12px;
  border: 1px dashed var(--color-primary);
  background-color: transparent;
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
