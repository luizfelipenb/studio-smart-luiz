import { Container, CardContainer } from "./styles";

import { BsThreeDots } from "react-icons/bs";
import { CardTask } from "../CardTask";
import { ButtonSolid } from "../ButtonSolid";

import { ModalCreateTask } from "../../components/ModalCreateTask";
import { useLists } from "../../providers/Lists";
import SettingsPopUp from "../SettingsPopUp";
import { useState } from "react";
import { motion } from "framer-motion";

export const Lists = ({ dataList, handleShowModal, showModalCreateTask }) => {
  const { deleteList } = useLists();
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <motion.div>
      <Container>
        <header>
          <h3>{dataList.name}</h3>
          <button type="button">
            <BsThreeDots size={22} onClick={() => setShowPopUp(!showPopUp)} />
          </button>
        </header>
        {showPopUp && (
          <SettingsPopUp isList deleteList={deleteList} listId={dataList.id} />
        )}
        <CardContainer>
          {dataList.tasks &&
            dataList.tasks.map((task, index) => (
              <CardTask data={task} listId={dataList.id} key={index} />
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
    </motion.div>
  );
};
