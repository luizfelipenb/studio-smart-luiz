import { useState } from "react";
import { Container } from "./styles";

export const SwitchButton = ({ ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <Container isChecked={isChecked} {...rest}>
      <input type="checkbox" onClick={handleClick} />
      <span></span>
    </Container>
  );
};
