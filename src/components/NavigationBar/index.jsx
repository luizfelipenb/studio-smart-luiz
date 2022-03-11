import { Container } from "./styles";
import { SwitchButton } from "../SwitchButton";
import { ButtonSolid } from "../ButtonSolid";
import { useNavigation } from "../../providers/Navigation";
import icon from "../../assets/icon.svg";

import { HiOutlineHome } from "react-icons/hi";
import { FiMail, FiUsers } from "react-icons/fi";
import { VscCalendar } from "react-icons/vsc";
import { MdAddShoppingCart } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { GoGraph } from "react-icons/go";
import { BiSelectMultiple } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export const NavigationBar = () => {
  const { showNav, handleShowNav, isActive, handleChangePage } =
    useNavigation();

  const history = useHistory();

  return (
    <Container showNav={showNav} isActive={isActive}>
      <img src={icon} alt="icon" onClick={handleShowNav} />

      <nav>
        <ul>
          <li onClick={() => handleChangePage("/", history)}>
            <HiOutlineHome size={23} />
            Dashboard
          </li>
          <li>
            <FiMail size={23} />
            Inbox
          </li>
          <li>
            <VscCalendar size={23} />
            Calendar
          </li>
          <li>
            <MdAddShoppingCart size={23} />
            Ecommerce
          </li>
          <li>
            <ImEarth size={23} />
            Social
          </li>
          <li>
            <FiUsers size={23} />
            Users
          </li>
          <li>
            <GoGraph size={23} />
            Analytics
          </li>
          <li onClick={() => handleChangePage("/tasks", history)}>
            <BiSelectMultiple size={23} />
            Task
          </li>
        </ul>
      </nav>

      <footer>
        <ul>
          <li>
            <span>Notification</span>
            <SwitchButton />
          </li>
          <li>
            <span>Dark mode</span>
            <SwitchButton />
          </li>
        </ul>
        <div></div>
        <ButtonSolid>
          <IoSettingsSharp />
          Maneger
        </ButtonSolid>
      </footer>
    </Container>
  );
};
