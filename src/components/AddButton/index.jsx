import { useState } from "react";
import { Container } from "./styles";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineOrderedList, AiOutlineFile } from "react-icons/ai";
export const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <div>
        <span>Add</span>
        <button type="button" onClick={handleClick}>
          {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
      </div>
      {isOpen && (
        <>
          <div>
            <span>List</span>
            <button type="button">
              <AiOutlineOrderedList />
            </button>
          </div>
          <div>
            <span>Task</span>
            <button type="button">
              <AiOutlineFile />
            </button>
          </div>
        </>
      )}
    </Container>
  );
};
