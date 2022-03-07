import ColorSchemeToggle from './ColorScheme/ColorSchemeToggle';
import FrainageComponent from './frainage/frainage';
// import logo from './logo.svg';
import './App.css';
import {Container , Row , Col} from "react-bootstrap"
import header from "./assets/header.png"
import logo from "./assets/logo.png"


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
        {/* this is the header section by H.N */}
        <Row><Col md={2}><img src={logo}/></Col>
        <Col md={2}>L'entretien</Col>
        <Col md={2}>la distrubition</Col>
        <Col md={2}>la climatisation</Col>
        <Col md={2}>le freinage</Col>
        <Col md={2}>
          <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search"/>
  </div></Col>
        </Row>
      </Container>
      <img src={header}/>
      {
      /* the component FrainageComponent used in the app by H.N */}
      <Container>
      <FrainageComponent/>
      </Container>
      </header>

    </div>
  );
}

export default App;
