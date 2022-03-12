import { Container, HeaderContainer, ListSection } from "./styles";

import logo from "../../assets/logo.svg";

import { ButtonDashed } from "../../components/ButtonDashed";
import { Lists } from "../../components/Lists";
import { ModalCreateList } from "../../components/ModalCreateList";

import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

import { useState } from "react";
import { useLists } from "../../providers/Lists";

export const Tasks = () => {
  const [showModalCreateList, setShowModalCreateList] = useState(false);
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);
  const handleShowModal = (setShowModal) => {
    setShowModal((prev) => !prev);
  };

  const { newList } = useLists();
  return (
    <Container>
      <HeaderContainer>
        <section>
          <div>
            <span>
              <BsArrowLeft size={16} />
            </span>
            <figure>
              <img src={logo} alt="" />
            </figure>
            <div>
              <h2>Studio Smart</h2>
              <span>In Progress</span>
            </div>
          </div>
          <div>
            <ButtonDashed>
              <MdOutlinePersonAddAlt size={20} />
              Add Member
            </ButtonDashed>
          </div>
        </section>
        <section>
          <ul>
            <li>Boards</li>
            <li>Timeline</li>
            <li>To do List</li>
            <li>Poll</li>
          </ul>
        </section>
      </HeaderContainer>

      <ListSection>
        <ul>
          {newList !== undefined &&
            newList.map((list, index) => (
              <Lists
                dataList={list}
                handleShowModal={() => handleShowModal(setShowModalCreateTask)}
                showModalCreateTask={showModalCreateTask}
                key={index}
              />
            ))}
          <ButtonDashed
            type="button"
            onClick={() => handleShowModal(setShowModalCreateList)}
          >
            <MdOutlinePersonAddAlt size={20} />
            Add List
          </ButtonDashed>
        </ul>
      </ListSection>
      {showModalCreateList && (
        <ModalCreateList
          handleShowModal={() => handleShowModal(setShowModalCreateList)}
        />
      )}
    </Container>
  );
};
