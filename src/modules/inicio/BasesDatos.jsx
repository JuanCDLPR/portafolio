import React from "react";

import { Box, Typography } from "@mui/material";

import { Col, Row } from "react-bootstrap";

import SQLSRR from "../../assets/sqlserver.svg";
import MONGO from "../../assets/mongo.png";
import MYSQL from "../../assets/mysql.png";

export default function BasesDatos() {
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
              Bases de Datos
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
                    <img src={SQLSRR} alt="" height={40} width={40} />
                    <div>SQL Server</div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={MONGO} alt="" height={40} width={30} />
                    <div>MongoDB </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="p-3">
                  <div className="d-flex justify-content-center flex-column align-content-center align-items-center">
                    <img src={MYSQL} alt="" height={40} width={40} />
                    <div>MySQL </div>
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
