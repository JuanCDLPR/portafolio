import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import REACT from "../../assets/react.png";
import JS from "../../assets/js.png";

import { FaRegCalendar } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { FaUniversity } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

import Proyect1FLX from "./flexor/Proyect1FLX";
import Proyect2FLX from "./flexor/Proyect2FLX";
import Proyect3FLX from "./flexor/Proyect3FLX";
import Proyect1KPLUS from "./knesys/Proyect1KPLUS";
import Proyect2PLUS from "./knesys/Proyect2KPLUS";

export default function ExperienciaEstudios() {
  return (
    <>
      <div className=" pt-5rem">
        <Typography className=" font-Oxygen text-center my-5 py-4 title_me">
          EXPERIENCIA LABORAL
        </Typography>

        <div className=" d-flex justify-content-center">
          <Typography className=" font-Oxygen fs-4 mb-5 text-">
            <FaRegCalendar />
            {"  "} Diciembre 2022 - Junio 2023
            <br />
            <RiHotelLine />
            {"  "}
            Flexor Technologies | Guadalajara, JAL
            <br />
            <GrUserWorker />
            {"  "}Software developer
          </Typography>
        </div>

        <Row className="p-0 m-0">
          <Proyect1FLX />
          <Proyect2FLX />
          <Proyect3FLX />
        </Row>

        <div className=" d-flex justify-content-center mt-4">
          <Typography className=" font-Oxygen fs-4 mb-5 text-">
            <FaRegCalendar />
            {"  "} Marzo 2021 - Agosto 2022
            <br />
            <RiHotelLine />
            {"  "}
            KnesysPlus | Zapopan, JAL
            <br />
            <GrUserWorker />
            {"  "}Software developer
          </Typography>
        </div>

        <Row className="p-0 m-0">
          <Proyect1KPLUS />
          <Proyect2PLUS />
        </Row>

        <Typography className=" font-Oxygen text-center my-5 py-4 title_me">
          EDUCACIÓN
        </Typography>

        <Row className="p-0 m-0">
          <Col xs={12} md={6}>
            <div className=" d-flex justify-content-center mb-5 cardSty">
              <Typography className=" font-Oxygen fs-4 mb-5 p-4">
                <FaRegCalendar className="me-2" />
                {"  "}
                2021 - 2023
                <br />
                <MdEngineering className="me-2" />
                {"  "}Licenciatura en Ingeniería en Gestión y Desarrollo de
                Software
                <br />
                <FaUniversity className="me-2" />
                {"  "}Universidad Tecnológica de Jalisco
                <br />
                <FaLocationPin className="me-2" />
                {"  "}Guadalajara, JAL
              </Typography>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className=" d-flex justify-content-center mb-5 cardSty">
              <Typography className=" font-Oxygen fs-4 mb-5 p-4">
                <FaRegCalendar className="me-2" />
                {"  "}
                2019 - 2021
                <br />
                <MdEngineering className="me-2" />
                {"  "}Técnico en Tecnologías de la Información y Desarrollo de
                Software Multiplataforma
                <br />
                <FaUniversity className="me-2" />
                {"  "}
                Universidad Tecnológica de Jalisco
                <br />
                <FaLocationPin className="me-2" />
                {"  "} Guadalajara, JAL
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
