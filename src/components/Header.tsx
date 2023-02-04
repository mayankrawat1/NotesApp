import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NotesApp</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
