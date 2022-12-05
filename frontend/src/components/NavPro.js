import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavPro() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Data Toko Loak</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavPro;
