import { Input } from "../Input";
import { Container } from "./styles";

const InputSelectTags = ({ isCategory, label }) => {
  return (
    <Container>
      {!!isCategory ? (
        <Input type="select" label={label}>
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
        <Input type="select" label={label}>
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