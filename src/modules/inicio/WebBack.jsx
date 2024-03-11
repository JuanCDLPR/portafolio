import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import NODE from "../../assets/node-js.png";
import NET from "../../assets/net.png";
export default function WebBack() {
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
              Desarrollo Web Backend
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
                <Col xs={6} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={NODE} alt="" height={40} width={40} />
                    <div>Node JS</div>
                  </div>
                </Col>
                <Col xs={6} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={NET} alt="" height={40} width={40} />
                    <div>NET</div>
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
