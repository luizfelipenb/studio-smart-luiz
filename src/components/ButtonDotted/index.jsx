import { Container } from "./styles";

const ButtonDotted = ({ type, children, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};

export default ButtonDotted;
