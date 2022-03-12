import { Container, CardContainer } from "./styles";

import { BsThreeDots } from "react-icons/bs";
import { CardTask } from "../CardTask";
import { ButtonSolid } from "../ButtonSolid";

import { ModalCreateTask } from "../../components/ModalCreateTask";

export const Lists = ({ dataList, handleShowModal, showModalCreateTask }) => {
  const card = dataList.tasks;

  return (
    <Container>
      <header>
        <h3>{dataList.name}</h3>
        <button>
          <BsThreeDots size={22} />
        </button>
      </header>
      <CardContainer>
        {card !== undefined &&
          card.map((task, index) => <CardTask data={task} key={index} />)}
        <ButtonSolid onClick={handleShowModal}>Add new task</ButtonSolid>
      </CardContainer>
      {showModalCreateTask && (
        <ModalCreateTask
          handleShowModal={handleShowModal}
          dataList={dataList}
        />
      )}
    </Container>
  );
};
