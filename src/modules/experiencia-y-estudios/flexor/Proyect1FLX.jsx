import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import REACT from "../../../assets/react.png";
import JS from "../../../assets/js.png";

export default function Proyect1FLX() {
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
          Kalendar FronEnd
        </Typography>
        <Typography className=" text-secondary font-Oxygen text-center">
          Sistema de reservas para una barbería en un ERP{" "}
        </Typography>

        <br />

        <Typography className=" font-Oxygen">Actividades:</Typography>

        <br />

        <ul style={{ fontSize: "14px" }}>
          <li>
            Desarrollo de módulos para la gestión de usuarios a través de un
            formulario con información básica de clientes y facturación
          </li>
          <li>
            Desarrollo de un módulo para la gestión de productos y categorías a
            través de un formulario
          </li>
          <li>
            Desarrollo de un módulo para la gestión de perfiles administrativos
            con campos básicos como correo electrónico, nombre, número de
            teléfono, foto y contraseña
          </li>
          <li>
            Desarrollo de un módulo para gestionar la creación, vencimiento y
            eliminación de cupones y descuentos
          </li>
        </ul>

        <br />

        <Typography className=" font-Oxygen">Tecnologias usadas:</Typography>

        <div className=" d-flex justify-content-center mt-4">
          <Tooltip title="JavaScript" placement="top-start">
            <img src={JS} alt="" height={40} width={40} className="me-4" />
          </Tooltip>
          <Tooltip title="React" placement="top-start">
            <img src={REACT} alt="" height={40} width={40} className="ms-4" />
          </Tooltip>
        </div>

        <br />
      </div>
    </Col>
  );
}
