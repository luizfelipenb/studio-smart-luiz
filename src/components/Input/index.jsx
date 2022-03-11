import { Container, InputContainer } from "./styles";

export const Input = ({ label, name, type, register, ...rest }) => {
  return (
    <Container>
      <div>
        {label}
        <span>*</span>
      </div>

      <InputContainer>
        {type === "select" ? (
          <select {...register(name)} {...rest}></select>
        ) : (
          <input type={type} {...register(name)} {...rest} />
        )}
      </InputContainer>
    </Container>
  );
};
