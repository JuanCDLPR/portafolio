import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import ANDROID from "../../../assets/Android.png";
import JAVA from "../../../assets/java.png";

export default function Proyect2PLUS() {
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
          Findable
        </Typography>
        <Typography className=" text-secondary font-Oxygen text-center">
          Programación en lotes para balizas/credenciales
        </Typography>

        <br />

        <Typography className=" font-Oxygen">Actividades:</Typography>

        <br />

        <ul style={{ fontSize: "14px" }}>
          <li>
            Desarrollo de una aplicación móvil para la programación en lotes de
            balizas/credenciales para el control y la ubicación de empleados
          </li>
        </ul>

        <br />

        <Typography className=" font-Oxygen">Tecnologias usadas:</Typography>

        <div className=" d-flex justify-content-center mt-4">
          <Tooltip title="Android Studio" placement="top-start">
            <img src={ANDROID} alt="" height={40} width={40} className="me-4" />
          </Tooltip>
          <Tooltip title="Java" placement="top-start">
            <img src={JAVA} alt="" height={40} width={40} className="ms-4" />
          </Tooltip>
        </div>

        <br />
      </div>
    </Col>
  );
}
