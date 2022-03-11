import { Container, NavHandleCreate } from "./styles";
import { Input } from "../Input";
import { useLists } from "../../providers/Lists";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const ModalCreateList = ({ handleShowModal }) => {
  const { addList } = useLists();
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState();

  const handleOnSubmit = () => {
    addList({ name: inputValue, tasks: [] });
    handleShowModal();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <section>
          <h3>Create List</h3>
          <button>X</button>
        </section>
        <section>
          <Input
            label="Name List "
            name="name"
            type="text"
            register={register}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </section>
        <NavHandleCreate>
          <div>
            <button onClick={handleShowModal}>Cancel</button>
            <button type="submit">Create</button>
          </div>
        </NavHandleCreate>
      </form>
    </Container>
  );
};
