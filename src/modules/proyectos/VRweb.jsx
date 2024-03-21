import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";

import { FaGithub, FaGlobe } from "react-icons/fa";

import VRwebImg from "../../assets/proyects/vr.png";
import REACT from "../../assets/react.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";

export default function VRweb() {
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
              Landing Page
            </Typography>

            <p className="px-5">Una Landing Page para un cliente real</p>

            <Typography className=" font-Oxygen mt-5 fs-5 mb-3">
              Tecnologias usadas
            </Typography>

            <div>
              <img src={REACT} alt="" height={40} width={40} className="mx-3" />
              <img src={JS} alt="" height={40} width={40} className="mx-3" />
              <img src={CSS} alt="" height={40} width={40} className="mx-3" />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-4">
          <div className="d-flex flex-column align-items-center">
            <a
              href="https://viajesrivieramexico.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={VRwebImg} alt="" className=" img-fluid img-rounded" />
            </a>

            <a
              href="https://viajesrivieramexico.com/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                style={{
                  marginTop: "5px",
                }}
              >
                <FaGlobe
                  style={{
                    fontSize: "30px",
                    color: "#000000",
                  }}
                />
              </IconButton>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
