import { Container, CardContainer } from "./styles";

import { BsThreeDots } from "react-icons/bs";
import { CardTask } from "../CardTask";
import { ButtonSolid } from "../ButtonSolid";

import { ModalCreateTask } from "../../components/ModalCreateTask";
import { useLists } from "../../providers/Lists";

export const Lists = ({ dataList, handleShowModal, showModalCreateTask }) => {
  const { deleteList } = useLists();
  return (
    <Container>
      <header>
        <h3>{dataList.name}</h3>
        <button>
          <BsThreeDots size={22} onClick={() => deleteList(dataList.name)} />
        </button>
      </header>
      <CardContainer>
        {dataList.tasks &&
          dataList.tasks.map((task, index) => (
            <CardTask data={task} key={index} />
          ))}
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
