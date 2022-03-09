import { Container, InputContainer } from "./styles";

export const InputDescription = ({ label, type, ...rest }) => {
  return (
    <Container>
      <div>
        {label}
        <span>*</span>
      </div>

      <InputContainer>
        <textarea type={type} {...rest} />
      </InputContainer>
    </Container>
  );
};
