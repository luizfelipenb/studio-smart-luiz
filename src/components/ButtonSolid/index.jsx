import { Container } from "./styles";

export const ButtonSolid = ({ type, children, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};
