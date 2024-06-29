import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title"></h1>

          <div className="navBar">
          </div>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome to Monty's Mineral SPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/packages">Our Packages</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/packages"
              element={<Packages packages={packages} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





