import { Container, CardContainer } from "./styles";

import { BsThreeDots } from "react-icons/bs";
import { CardTask } from "../CardTask";
import { ButtonSolid } from "../ButtonSolid";

export const Lists = ({ dataList }) => {
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
        <ButtonSolid>Add new task</ButtonSolid>
      </CardContainer>
    </Container>
  );
};
