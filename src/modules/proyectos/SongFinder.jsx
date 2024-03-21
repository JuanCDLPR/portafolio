import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";

import { FaGithub, FaGlobe } from "react-icons/fa";

import SongFinderImg from "../../assets/proyects/songfinder.png";
import REACT from "../../assets/react.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";

export default function SongFinder() {
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
              SongFinder
            </Typography>

            <p className="px-5">
              Una aplicación interactiva de busqueda, con una interfaz de carga
              <span
                style={{
                  fontFamily: "serif",
                  fontWeight: "bold",
                }}
              >
                .
              </span>{" "}
              Usando la API de Deezer se pueden solicitar datos de canciones
              <span
                style={{
                  fontFamily: "serif",
                  fontWeight: "bold",
                }}
              >
                .{" "}
              </span>
              <br />
              Incluso escuchar un adelanto
              <span
                style={{
                  fontFamily: "serif",
                  fontWeight: "bold",
                }}
              >
                .
              </span>
            </p>

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
              href="https://songfinder-jc.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SongFinderImg}
                alt=""
                className=" img-fluid img-rounded"
              />
            </a>

            <div>
              <a
                href="https://github.com/JuanCDLPR/songfinder"
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
                      fontSize: "30px",
                      color: "#000000",
                    }}
                  />
                </IconButton>
              </a>

              <a
                href="https://songfinder-jc.netlify.app/"
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
          </div>
        </Col>
      </Row>
    </div>
  );
}
