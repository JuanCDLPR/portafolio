import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";

import { FaGithub, FaGlobe } from "react-icons/fa";

import VrCRMImg from "../../assets/proyects/crm.png";
import REACT from "../../assets/react.png";
import NODE from "../../assets/node-js.png";
import SQL from "../../assets/sqlserver.svg";

export default function VrCRM() {
  return (
    <div
      className=" shadow-lg bg-light "
      style={{
        borderRadius: "8px",
      }}
    >
      <Row className="p-0 m-0">
        <Col xs={12} md={6} className="p-4 ">
          <div className="d-flex flex-column text-center">
            <Typography className=" font-Oxygen mb-3 fs-4">
              Sistema de administración
            </Typography>

            <p className="px-5">
              Un sistema para el control de ventas, totalmente personalizado
              para el cliente
            </p>

            <Typography className=" font-Oxygen mt-5 fs-5 mb-3">
              Tecnologias usadas
            </Typography>

            <div>
              <img src={REACT} alt="" height={40} width={40} className="mx-3" />
              <img src={SQL} alt="" height={40} width={40} className="mx-3" />
              <img src={NODE} alt="" height={40} width={40} className="mx-3" />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-4">
          <div className="d-flex flex-column align-items-center">
            <img src={VrCRMImg} alt="" className=" img-fluid img-rounded" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
