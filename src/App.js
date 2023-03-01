import Menu from "./styles/Menu";
import Container from "react-bootstrap/esm/Container";
import Main from "./styles/Main";
import Top from "./Top";
import './styles/App.css';

function App() {
  return (
<>       
<Menu />
<Container style={{backgroundColor: "#FFFAFA", alignItems: "center", justifyContent: "center", textAlign: "center"}}>

<Top />
<div>
    <Main></Main>
</div>

      
        </Container>
        </>       
  );
}

export default App;
