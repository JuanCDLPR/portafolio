import React from "react";
//import NavBar from "./NavBar";
import { Box, Tooltip, IconButton } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import loogo from "../assets/j-alphabet-round-icon.svg";
import imgFavoritos from "../assets/Favoritos.svg";

export default function Initial() {
  const location = useLocation();
  return (
    <>
      <Navbar
        expand="sm"
        bg="withe"
        fixed="top"
        style={{
          backgroundColor: "white",
          height: "5rem",
        }}
      >
        <Container>
          <Navbar.Brand href="#">
            <Link to="home" style={{ textDecoration: "none", color: "black" }}>
              <img
                src={loogo}
                className="img-fluid img-brand"
                height={50}
                width={50}
                alt=""
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="bg-white" id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Link
                className="p-2 me-2 font-Oxygen animated-text "
                to="home"
                style={{
                  textDecoration: "none",
                  color:
                    location.pathname == "/" || location.pathname == "/home"
                      ? "#C9A396"
                      : "black",
                }}
              >
                Inicio
              </Link>

              <Link
                className="p-2 me-2 font-Oxygen animated-text"
                to="nosotros"
                style={{
                  textDecoration: "none",
                  color: location.pathname == "/nosotros" ? "#C9A396" : "black",
                }}
              >
                Sobre mi
              </Link>
              <Link
                className="p-2 me-2 font-Oxygen animated-text"
                to="productos"
                style={{
                  textDecoration: "none",
                  color:
                    location.pathname == "/productos" ? "#C9A396" : "black",
                }}
              >
                Proyectos
              </Link>

              <Link
                className="p-2 me-2 font-Oxygen animated-text"
                to="bride"
                style={{
                  textDecoration: "none",
                  color: location.pathname == "/bride" ? "#C9A396" : "black",
                }}
              >
                Estudios
              </Link>
              <Link
                className="p-2 me-2 font-Oxygen animated-text"
                to="workshop"
                style={{
                  textDecoration: "none",
                  color: location.pathname == "/workshop" ? "#C9A396" : "black",
                }}
              >
                Workshop
              </Link>

              <Link
                className="p-2 me-2 font-Oxygen animated-text"
                to="contacto"
                style={{
                  textDecoration: "none",
                  color: location.pathname == "/contacto" ? "#C9A396" : "black",
                }}
              >
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{ flexGrow: 1 }}
          className="p-0"
          style={{
            //backgroundColor: "black",
            backgroundColor: "#000000",
            backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
            minHeight: "calc(100vh - 5rem)",
          }}
        >
          <div
            style={{
              marginTop: "900px",
            }}
          >
            initial
          </div>
        </Box>
      </Box>
    </>
  );
}
