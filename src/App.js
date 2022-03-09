import { MainContainer } from "./styles";
import { GlobalStyle } from "./styles/global";
import ButtonDotted from "./components/ButtonDotted";
import { IoMdSettings } from "react-icons/io";
import ButtonSolid from "./components/ButtonSolid";
import { RiUserAddLine } from "react-icons/ri";
import { SwitchButton } from "./components/SwitchButton";
import { AddButton } from "./components/AddButton";
import { FilterButton } from "./components/FilterButton";
import { Input } from "./components/Input";
import { InputDescription } from "./components/InputDescription";
import InputSelectTags from "./components/ModalSelectProject";

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
      <SwitchButton />
      <AddButton />
      <FilterButton />
      <Input label="Resume" placeholder="Resume" />
      <InputDescription label="Description" placeholder="Description" />
      <Input type="select" label="Select">
        <option value="Select">All category</option>
      </Input>
      <InputSelectTags label="Priority" isCategory />
      <InputSelectTags label="Category" />
    </MainContainer>
  );
}

export default App;
