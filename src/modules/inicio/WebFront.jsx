import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import ANGULAR from "../../assets/angular.png";
import REACT from "../../assets/react.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import NEXTJS from "../../assets/nextjs.png";

export default function WebFront() {
  return (
    <>
      <Row className="">
        <Col xs={12} className="">
          <div
            className="d-flex justify-content-center flex-column align-items-center text-center"
            style={{
              marginBottom: "80px",
            }}
          >
            <Typography className="font-Oxygen" variant="h5">
              Desarrollo Web Frontend
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
                    <img src={REACT} alt="" height={40} width={40} />
                    <div>React</div>
                  </div>
                </Col>
                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={ANGULAR} alt="" height={40} width={40} />
                    <div>Angular CLI</div>
                  </div>
                </Col>

                <Col xs={6} md={3} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={HTML} alt="" height={40} width={40} />
                    <div>HTML</div>
                  </div>
                </Col>
                <Col xs={6} md={2} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={NEXTJS} alt="" height={40} width={40} />
                    <div>Next JS</div>
                  </div>
                </Col>
                <Col xs={6} md={3} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={CSS} alt="" height={40} width={40} />
                    <div>CSS</div>
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
