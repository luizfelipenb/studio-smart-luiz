import { Container, CategoryDiv, InformationDiv } from "./styles";
import { ButtonDashed } from "../ButtonDashed";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useLists } from "../../providers/Lists";
import SettingsPopUp from "../SettingsPopUp";
import { useState } from "react";

export const CardTask = ({ data, listId }) => {
  const { deleteTask } = useLists();
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <Container>
      <CategoryDiv>
        <ul>
          <li>{data.category}</li>
          <li>
            <ButtonDashed>
              <AiOutlinePlus size={10} />
            </ButtonDashed>
          </li>
        </ul>
        <button onClick={() => setShowPopUp(!showPopUp)}>
          <BsThreeDots size={16} />
        </button>
      </CategoryDiv>
      {showPopUp && (
        <SettingsPopUp
          deleteTask={deleteTask}
          taskId={data.id}
          currentListId={listId}
        />
      )}
      <p>
        <strong>{data.resume}:</strong> {data.description}
      </p>
      <InformationDiv>
        <span>{data.priority}</span>
        <ButtonDashed>
          <MdOutlinePersonAddAlt size={17} />
        </ButtonDashed>
      </InformationDiv>
    </Container>
  );
};
