import { Container, InputContainer } from "./styles";

export const InputDescription = ({ label, type, name, register, ...rest }) => {
  return (
    <Container>
      <div>
        {label}
        <span>*</span>
      </div>

      <InputContainer>
        <textarea type={type} {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
