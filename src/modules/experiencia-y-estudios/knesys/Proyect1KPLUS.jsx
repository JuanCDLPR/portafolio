import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import ARDUINO from "../../../assets/arduino.png";

export default function Proyect1KPLUS() {
  return (
    <Col xs={12} md={6} className="d-flex justify-content-center mb-5">
      <div
        style={{
          boxShadow: "2",
          background: "#FFFFFF",

          borderRadius: "10px",
        }}
        className="  shadow-lg w-100 p-3"
      >
        <Typography className="font-Oxygen fs-4 text-center">
          Automatización
        </Typography>
        <Typography className=" text-secondary font-Oxygen text-center">
          Automatización de la línea de producción
        </Typography>

        <br />

        <Typography className=" font-Oxygen">Actividades:</Typography>

        <br />

        <ul style={{ fontSize: "14px" }}>
          <li>Diseño electrónico para una mesa de sujeción al vacío</li>
        </ul>

        <br />

        <Typography className=" font-Oxygen">Tecnologias usadas:</Typography>

        <div className=" d-flex justify-content-center mt-4">
          <Tooltip title="JavaScript" placement="top-start">
            <img src={ARDUINO} alt="" height={40} width={40} className="me-4" />
          </Tooltip>
        </div>

        <Typography className=" font-Oxygen mt-2">
          Otras Herramientas:
        </Typography>

        <ul>
          <li>Relés</li>
          <li>Sensores de temperatura</li>
          <li>Transistores</li>
          <li>Módulo Bluetooth</li>
        </ul>

        <br />
      </div>
    </Col>
  );
}
