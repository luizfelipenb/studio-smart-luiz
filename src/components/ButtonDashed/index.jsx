import { Container } from "./styles";

export const ButtonDashed = ({ type, children, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
