import { Container } from "./styles";

import { BsThreeDots } from "react-icons/bs";

export const Lists = ({ dataList }) => {
  return (
    <Container>
      <header>
        <h3>{dataList.name}</h3>
        <button>
          <BsThreeDots size={16} />
        </button>
      </header>
    </Container>
  );
};
