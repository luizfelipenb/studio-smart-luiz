import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
const SettingsPopUp = ({ isList, deleteList, listId, deleteTask, taskId }) => {
  return (
    <Container isList={isList}>
      <span>
        <MdModeEditOutline size={16} />
        Editar
      </span>
      <span onClick={() => (isList ? deleteList(listId) : deleteTask(taskId))}>
        <BiTrash size={16} />
        Excluir
      </span>
    </Container>
  );
};

export default SettingsPopUp;
