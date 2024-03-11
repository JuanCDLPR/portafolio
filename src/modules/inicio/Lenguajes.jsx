import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import JS from "../../assets/js.png";
import CS from "../../assets/csharp.png";
import JAVA from "../../assets/java.png";
import PHP from "../../assets/php.png";
import ARDUINO from "../../assets/arduino.png";

export default function Lenguajes() {
  return (
    <>
      <Row className="">
        <Col xs={12} className="">
          <div
            className="d-flex justify-content-center flex-column align-items-center text-center"
            style={{
              marginTop: "70px",
              marginBottom: "80px",
            }}
          >
            <Typography className="font-Oxygen" variant="h5">
              Lenguajes de Programación
            </Typography>
            <Box
              sx={{
                borderRadius: "5px",
                marginTop: "30px",
                //boxShadow:                  "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)",
                //background: "white",
              }}
              className=" w-75"
            >
              <Row>
                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={JS} alt="" height={40} width={40} />
                    <div>JavaScript</div>
                  </div>
                </Col>
                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={CS} alt="" height={40} width={40} />
                    <div>C#</div>
                  </div>
                </Col>

                <Col xs={6} md={3} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={JAVA} alt="" height={40} width={40} />
                    <div>Java</div>
                  </div>
                </Col>

                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={PHP} alt="" height={40} width={40} />
                    <div>PHP</div>
                  </div>
                </Col>

                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={ARDUINO} alt="" height={40} width={40} />
                    <div>C++ (Arduino)</div>
                  </div>
                </Col>
              </Row>
            </Box>
          </div>
        </Col>
      </Row>
    </>
  );
}
