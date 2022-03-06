import { Container } from "./styles";

const ButtonSolid = ({ type, children, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};

export default ButtonSolid;
