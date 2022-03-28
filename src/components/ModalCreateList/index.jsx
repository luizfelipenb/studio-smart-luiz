import { Container, NavHandleCreate } from "./styles";
import { Input } from "../Input";
import { useLists } from "../../providers/Lists";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ModalCreateList = ({ handleShowModal }) => {
  const { addList } = useLists();
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState();

  const handleOnSubmit = () => {
    addList({ id: uuidv4(), name: inputValue, tasks: [] });
    handleShowModal();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <section>
          <h3>Create List</h3>
          <button onClick={handleShowModal}>X</button>
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
