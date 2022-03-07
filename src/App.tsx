import ColorSchemeToggle from './ColorScheme/ColorSchemeToggle';
import FrainageComponent from './frainage/frainage';
// import logo from './logo.svg';
import './App.css';
import {Container , Row , Col} from "react-bootstrap"
import header from "./assets/header.png"

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
      <Container className="first-container">
        
        <Row>
          <Col md={8}></Col>
          {/* the toggle of the dark and light mode by H.N */}
          <Col md={4}><ColorSchemeToggle /></Col>
        </Row>
        
      </Container>
      <img src={header}/>
      {/* the component FrainageComponent used in the app by H.N */}
      <FrainageComponent/>
      </header>

    </div>
  );
}

export default App;
