import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import Routes from "./routes";
import { MainContainer, SectionContent } from "./styles";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <NavigationBar />
      <SectionContent>
        <Header />
        <Routes />
      </SectionContent>
    </MainContainer>
  );
}

export default App;
