import {
  Container,
  DataSection,
  PathDiv,
  DescrptionDiv,
  NavHandleCreate,
  TagDiv,
} from "./styles";
import { Input } from "../Input";
import { InputDescription } from "../InputDescription";
import { useLists } from "../../providers/Lists";

import { useForm } from "react-hook-form";
import InputSelectTags from "../InputSelectTags";

import { v4 as uuidv4 } from "uuid";

export const ModalCreateTask = ({ handleShowModal, dataList }) => {
  const { addCardTask } = useLists();
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (dataTask) => {
    const finalDataSent = {
      id: uuidv4(),
      category: dataTask.category,
      description: dataTask.description,
      priority: dataTask.priority,
      resume: dataTask.resume,
      date: dataTask.date,
    };
    console.log(finalDataSent);
    addCardTask(dataList.id, finalDataSent);
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
              <option value={dataList.name} defaultValue={dataList.name}>
                {dataList.name}
              </option>
            </Input>
          </PathDiv>
          <DescrptionDiv>
            <Input label="Resume" name="resume" register={register} />
            <InputDescription
              label="Description"
              name="description"
              register={register}
            />
          </DescrptionDiv>
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
