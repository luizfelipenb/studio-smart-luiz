import { Container, CategoryDiv, InformationDiv } from "./styles";
import { ButtonDashed } from "../ButtonDashed";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export const CardTask = ({ data }) => {
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
        <button>
          <BsThreeDots size={16} />
        </button>
      </CategoryDiv>
      <p>
        {data.resume}:{data.description}
      </p>
      <InformationDiv>
        <span>Highest</span>
        <ButtonDashed>
          <MdOutlinePersonAddAlt size={17} />
        </ButtonDashed>
      </InformationDiv>
    </Container>
  );
};
