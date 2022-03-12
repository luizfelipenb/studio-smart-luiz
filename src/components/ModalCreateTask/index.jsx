import {
  Container,
  DataSection,
  PathDiv,
  DescrpDiv,
  NavHandleCreate,
  TagDiv,
} from "./styles";
import { Input } from "../Input";
import { InputDescription } from "../InputDescription";
import { useLists } from "../../providers/Lists";

import { useForm } from "react-hook-form";
import InputSelectTags from "../InputSelectTags";

export const ModalCreateTask = ({ handleShowModal, dataList }) => {
  const { newList, addCardTask } = useLists();
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (task) => {
    delete task.excluir_responsible;
    delete task.excluir_project;
    delete task.excluir_list;
    delete task.date;

    addCardTask(dataList, task);
    handleShowModal();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <section>
          <h3>Create List</h3>
          <button onClick={handleShowModal}>X</button>
        </section>
        <DataSection>
          <PathDiv>
            <Input
              label="Project"
              type="select"
              name="excluir_project"
              register={register}
            >
              <option value="Smart Studio">Smart Studio</option>
            </Input>
            <Input
              label="List"
              type="select"
              name="excluir_list"
              register={register}
            >
              {newList.map((list, index) => (
                <option value={list.name} key={index}>
                  {list.name}
                </option>
              ))}
            </Input>
          </PathDiv>
          <DescrpDiv>
            <Input label="Resume" name="resume" register={register} />
            <InputDescription
              label="Description"
              name="description"
              register={register}
            />
          </DescrpDiv>
          <TagDiv>
            <InputSelectTags name="category" register={register} />
            <InputSelectTags isPriority name="priority" register={register} />
            <Input
              label="Responsible"
              type="select"
              name="excluir_responsible"
              register={register}
            >
              <option value="Select">Select</option>
            </Input>
            <Input
              label="delivey date"
              name="date"
              register={register}
              placeholder="_/_/_"
            />
          </TagDiv>
        </DataSection>
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
