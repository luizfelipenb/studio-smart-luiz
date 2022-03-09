import { Container, InputContainer } from "./styles";

export const Input = ({ label, type, ...rest }) => {
  return (
    <Container>
      <div>
        {label}
        <span>*</span>
      </div>

      <InputContainer>
        {type === "select" ? (
          <select {...rest}></select>
        ) : (
          <input type={type} {...rest} />
        )}
      </InputContainer>
    </Container>
  );
};
