import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import REACT from "../../../assets/react.png";
import JS from "../../../assets/js.png";

export default function Proyect3FLX() {
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
          Flor Creativa eCommerce
        </Typography>
        <Typography className=" text-secondary font-Oxygen text-center">
          Alquiler de propiedades y venta de productos para eventos
        </Typography>

        <br />

        <Typography className=" font-Oxygen">Actividades:</Typography>

        <br />

        <ul style={{ fontSize: "14px" }}>
          <li>
            Desarrollo de un ERP para que los administradores puedan registrar
            productos, categorías, clientes, puntos de venta, sucursales,
            proveedores y personal de entrega
          </li>
          <li>
            Gestión completamente personalizable de las áreas de entrega y los
            costos de envío
          </li>
        </ul>

        <br />

        <Typography className=" font-Oxygen">Tecnologias usadas:</Typography>

        <div className=" d-flex justify-content-center mt-4">
          <Tooltip title="C#" placement="top-start">
            <img src={REACT} alt="" height={40} width={40} className="me-4" />
          </Tooltip>

          <Tooltip title=".NET" placement="top-start">
            <img src={JS} alt="" height={40} width={40} className="ms-4" />
          </Tooltip>
        </div>
      </div>
    </Col>
  );
}
