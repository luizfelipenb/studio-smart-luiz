import { Input } from "../Input";
import { Container } from "./styles";

const InputSelectTags = ({ isPriority, name, register }) => {
  return (
    <Container>
      {!!isPriority ? (
        <Input type="select" label="Priority" name={name} register={register}>
          <option value="All Priority" disabled>
            All Priority
          </option>
          <option value="Highest">Highest</option>
          <option value="High">High</option>
          <option value="Studio Smart">Studio Smart</option>
          <option value="Low">Low</option>
          <option value="Lowest">Lowest</option>
        </Input>
      ) : (
        <Input type="select" label="Category" name={name} register={register}>
          <option value="All Category" disabled>
            All Category
          </option>
          <option value="Desing">Design</option>
          <option value="Code">Code</option>
        </Input>
      )}
    </Container>
  );
};

export default InputSelectTags;
