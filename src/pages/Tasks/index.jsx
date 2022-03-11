import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { ButtonDashed } from "../../components/ButtonDashed";

import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

import { api } from "../../services/api";
import { Lists } from "../../components/Lists";

export const Tasks = () => {
  return (
    <Container>
      <header>
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
      </header>

      <section>
        <ul>
          {api.map((list, index) => (
            <Lists dataList={list} key={index} />
          ))}
          <ButtonDashed>
            <MdOutlinePersonAddAlt size={20} />
            Add List
          </ButtonDashed>
        </ul>
      </section>
    </Container>
  );
};
