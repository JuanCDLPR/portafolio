import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";

import Me from "../../assets/me.png";
import CV from "../../assets/JuanCarlos_DeLaPazRamírez_CV_ES.pdf";
import Lenguajes from "./Lenguajes";
import WebFront from "./WebFront";
import WebBack from "./WebBack";
import BasesDatos from "./BasesDatos";
import Otras from "./Otras";

import All from "./All";

import "./button.css";

export default function Inicio() {
  const downloadCV = () => {
    const enlaceTemp = document.createElement("a");
    enlaceTemp.href = CV;
    enlaceTemp.setAttribute("download", "JuanDeLaPaz_CV.pdf");
    document.body.appendChild(enlaceTemp);
    enlaceTemp.click();
    document.body.removeChild(enlaceTemp);
  };

  return (
    <>
      <div className="pt-5rem container">
        <Row className="px-0 px-md-2">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="d-flex d-md-none flex-column align-items-center">
              <div
                style={{
                  background: `url(${Me})`,
                  backgroundPositionX: "85%",
                  backgroundPositionY: "10%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "150%",
                  border: "3px solid #000000",
                  borderRadius: "5rem",
                  width: "20rem",
                  height: "20rem",
                }}
              />
              <a
                href="https://github.com/JuanCDLPR"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <FaGithub
                    style={{
                      fontSize: "40px",
                      color: "#000000",
                    }}
                  />
                </IconButton>
              </a>
            </div>
          </Col>

          <Col xs={12} md={6} className="">
            <div className=" d-block d-md-none pt-5">
              <div className="title_me">FULL STACK DEVELOPER</div>
              <div className="mt-3 text-center text-md-start">
                Hola, mi nombre es
                <div style={{ color: "#5425B3" }}>Juan Carlos De La Paz</div>
                soy un entuciasta de la programacion
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className=" ps-md-5 pt-md-5">
            <div className=" d-none d-md-block">
              <div className="title_me2 ">FULL STACK DEVELOPER</div>
              <div className="mt-3 text-center text-md-start ">
                Hola, mi nombre es
                <div style={{ color: "#5425B3" }}>Juan Carlos De La Paz</div>
                soy un entuciasta de la programacion
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center pt-md-5"
          >
            <div className="d-none d-md-flex flex-column align-items-center ">
              <div
                style={{
                  background: `url(${Me})`,
                  backgroundPositionX: "85%",
                  backgroundPositionY: "10%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "150%",
                  border: "3px solid #000000",
                  borderRadius: "5rem",
                  width: "23rem",
                  height: "23rem",
                }}
              />
              <a
                href="https://github.com/JuanCDLPR"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <FaGithub
                    style={{
                      fontSize: "40px",
                      color: "#000000",
                    }}
                  />
                </IconButton>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col
            xs={12}
            className=" d-flex mt-5 mt-md-0  ps-0 ps-md-5 justify-content-center justify-content-md-start"
          >
            <button class="button" type="button" onClick={downloadCV}>
              <span class="button__text">Descargar CV</span>
              <span class="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  class="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </Col>
        </Row>

        {/* <Lenguajes />

        <WebFront />

        <WebBack />

        <BasesDatos />

        <Otras /> */}
        <All />
      </div>
    </>
  );
}
