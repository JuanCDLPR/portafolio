import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import CSH from "../../../assets/csharp.png";
import SQL from "../../../assets/sqlserver.svg";
import NET from "../../../assets/net.png";

export default function Proyect2FLX() {
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
          Kalendar BackEnd
        </Typography>
        <Typography className=" text-secondary font-Oxygen text-center">
          Sistema de APIs para la operación de Kalendar Web
        </Typography>

        <br />

        <Typography className=" font-Oxygen">Actividades:</Typography>

        <br />

        <ul style={{ fontSize: "14px" }}>
          <li>
            Desarrollo de APIs para cada uno de los módulos mencionados y su
            conexión respectiva a la base de datos mediante consultas adecuadas
          </li>
          <li>
            Validaciones necesarias para evitar el almacenamiento de datos
            incorrectos
          </li>
        </ul>

        <br />

        <Typography className=" font-Oxygen">Tecnologias usadas:</Typography>

        <div className=" d-flex justify-content-center mt-4">
          <Tooltip title="C#" placement="top-start">
            <img src={CSH} alt="" height={40} width={40} className="me-4" />
          </Tooltip>
          <Tooltip title="SQL Server" placement="top-start">
            <img
              src={SQL}
              alt=""
              height={40}
              width={40}
              className="ms-4 me-4"
            />
          </Tooltip>
          <Tooltip title=".NET" placement="top-start">
            <img src={NET} alt="" height={40} width={40} className="ms-4" />
          </Tooltip>
        </div>
      </div>
    </Col>
  );
}
