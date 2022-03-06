import { MainContainer } from "./styles";
import { GlobalStyle } from "./styles/global";
import ButtonDotted from "./components/ButtonDotted";
import { IoMdSettings } from "react-icons/io";
import ButtonSolid from "./components/ButtonSolid";
import { RiUserAddLine } from "react-icons/ri";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />

      <ButtonSolid>
        <IoMdSettings />
        Manage account
      </ButtonSolid>
      <ButtonDotted type="button">
        <RiUserAddLine />
        Add List
      </ButtonDotted>
    </MainContainer>
  );
}

export default App;
