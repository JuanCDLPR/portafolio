import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import ANDROID from "../../assets/Android.png";
import GIT from "../../assets/git.png";
import LINUX from "../../assets/ubuntu.png";
import WINDOWS from "../../assets/windows.png";
import AWS from "../../assets/aws.png";

export default function Otras() {
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
              Otras
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
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={ANDROID} alt="" height={40} width={40} />
                    <div>Android Studio</div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={GIT} alt="" height={40} width={30} />
                    <div>GIT </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={LINUX} alt="" height={40} width={40} />
                    <div>Linux (Ubuntu) </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={WINDOWS} alt="" height={40} width={40} />
                    <div>Linux (Ubuntu) </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={AWS} alt="" height={40} width={40} />
                    <div>AWS </div>
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
