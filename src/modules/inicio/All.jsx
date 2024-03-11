import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import JS from "../../assets/js.png";
import CS from "../../assets/csharp.png";
import JAVA from "../../assets/java.png";
import PHP from "../../assets/php.png";
import ARDUINO from "../../assets/arduino.png";

import ANGULAR from "../../assets/angular.png";
import REACT from "../../assets/react.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import NEXTJS from "../../assets/nextjs.png";

import NODE from "../../assets/node-js.png";
import NET from "../../assets/net.png";

import SQLSRR from "../../assets/sqlserver.svg";
import MONGO from "../../assets/mongo.png";
import MYSQL from "../../assets/mysql.png";

import ANDROID from "../../assets/Android.png";
import GIT from "../../assets/git.png";
import LINUX from "../../assets/ubuntu.png";
import WINDOWS from "../../assets/windows.png";
import AWS from "../../assets/aws.png";

export default function All() {
  return (
    <>
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
                Skills
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
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={JS} alt="" height={40} width={40} />
                      <div>JavaScript</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
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

                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={PHP} alt="" height={40} width={40} />
                      <div>PHP</div>
                    </div>
                  </Col>

                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={ARDUINO} alt="" height={40} width={40} />
                      <div>C++ (Arduino)</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={REACT} alt="" height={40} width={40} />
                      <div>React</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
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
                  <Col xs={6} md={3} className="p-3">
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
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={NODE} alt="" height={40} width={40} />
                      <div>Node JS</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={NET} alt="" height={40} width={40} />
                      <div>NET</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={SQLSRR} alt="" height={40} width={40} />
                      <div>SQL Server</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={MONGO} alt="" height={40} width={30} />
                      <div>MongoDB </div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={MYSQL} alt="" height={40} width={40} />
                      <div>MySQL </div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={ANDROID} alt="" height={40} width={40} />
                      <div>Android Studio</div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={GIT} alt="" height={40} width={30} />
                      <div>GIT </div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={LINUX} alt="" height={40} width={40} />
                      <div>Linux (Ubuntu) </div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
                    <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                      <img src={WINDOWS} alt="" height={40} width={40} />
                      <div>Linux (Ubuntu) </div>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="p-3">
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
    </>
  );
}
