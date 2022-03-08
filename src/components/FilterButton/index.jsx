import { useState } from "react";
import { Container } from "./styles";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <div>
        <span>Filter</span>
        <button type="button" onClick={handleClick}>
          {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
      </div>
      {isOpen && (
        <ul>
          <li>All</li>
          <li>Design</li>
          <li>Code</li>
        </ul>
      )}
    </Container>
  );
};
