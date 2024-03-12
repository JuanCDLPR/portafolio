import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Me from "../../assets/me.png";

import { SiSemanticscholar } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";

export default function SobreMi() {
  function calcularAniosExperiencia() {
    const anioInicio = 2021; // El año en que comenzaste a programar
    const anioActual = new Date().getFullYear(); // Obtiene el año actual
    return anioActual - anioInicio;
  }

  return (
    <>
      <div className="pt-5rem ">
        <div className=" d-flex justify-content-center w-100 container">
          <Row className="p-0 m-0">
            <Col xs={12} md={12} className="px-5 d-flex justify-content-center">
              <div
                style={{
                  boxShadow: "2",
                  background: "#FFFFFF",
                  marginTop: "80px",
                  //width: "auto",
                  //padding: "20px",
                  //borderStyle: "solid",
                  //borderColor: "#000000",
                  borderRadius: "10px",
                }}
                className=" p-4 anchoComentario shadow-lg"
              >
                <Typography className="font-Oxygen fs-2 text-center">
                  Un desarrollador web entusiasta 💻
                </Typography>
                <p>
                  Soy un desarrollador Full Stack con{" "}
                  {calcularAniosExperiencia()} años de experiencia,
                  especializado en JavaScript, React, Angular, Node
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>
                  js, C# y{" "}
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>
                  NET
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>{" "}
                  Lo que me motiva día a día es la libertad que me ofrece el
                  desarrollo web para resolver problemas; me encanta enfrentar
                  nuevos retos que me empujan a superar mis límites y evitar el
                  estancamiento
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>
                  <br />
                  <br />
                  Mi proyecto más destacado hasta la fecha es un sistema de
                  administración de ventas para una agencia de viajes, una
                  experiencia que afianzó mi amor por construir soluciones
                  robustas y escalables
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>{" "}
                  En el mundo del código, busco constantemente la innovación y
                  el aprendizaje, manteniendo la emoción por descubrir y superar
                  los desafíos que se presentan
                  <span
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    .
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="p-0 m-0">
          <Col xs={12} sm={4}>
            <div className="d-flex justify-content-center pt-5">
              <div class="book">
                <ul>
                  <li>Musica 🎵</li>
                  <li>Videojuegos 🎮</li>
                  <li>Gimmnasio 🏋️‍♂️</li>
                  <li>Peliculas 🎥</li>
                  <li>Series 📹</li>
                </ul>
                <div class="cover">
                  <div className="d-flex flex-column align-items-center">
                    <MdVideogameAsset
                      style={{
                        fontSize: "50px",
                      }}
                    />

                    <p className="fs-4">Pasatiempos</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="d-flex justify-content-center pt-5">
              <div class="book">
                <ul>
                  <li>React</li>
                  <li>Node JS Basic</li>
                  <li>Angular JS</li>
                  <li>Node JS Expert</li>
                  <li>Mongo BD</li>
                </ul>
                <div class="cover">
                  <div className="d-flex flex-column align-items-center">
                    <SiSemanticscholar
                      style={{
                        fontSize: "50px",
                      }}
                    />

                    <p className="fs-4">Cursos</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="d-flex justify-content-center pt-5">
              <div class="book">
                <ul>
                  <li>Español</li>
                  <li>Ingles (principiante)</li>
                </ul>
                <div class="cover">
                  <div className="d-flex flex-column align-items-center">
                    <IoLanguageSharp
                      style={{
                        fontSize: "50px",
                      }}
                    />

                    <p className="fs-4">Idiomas</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="w-100 py-5 my-4"></div>
    </>
  );
}
