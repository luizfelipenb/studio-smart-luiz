import { Container } from "./styles";
import { useNavigation } from "../../providers/Navigation";

import { GoSearch } from "react-icons/go";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
  const { handleShowNav } = useNavigation();
  return (
    <Container>
      <section>
        <button>
          <GoSearch size={23} />
        </button>
        <input type="text" placeholder="Search" />
      </section>
      <section>
        <div>
          <HiOutlineChatAlt2 size={27} />
        </div>
        <div>
          <MdOutlineNotificationsNone size={27} />
        </div>
        <div>
          <img></img>
          <h3>Enaelson Pedro</h3>
          <button onClick={handleShowNav}>
            <IoMdArrowDropdown size={15} />
          </button>
        </div>
      </section>
    </Container>
  );
};
