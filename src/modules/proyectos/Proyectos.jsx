import { Container } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

import NoteApp from "./NoteApp";
import SongFinder from "./SongFinder";
import VRweb from "./VRweb";
import VrCRM from "./VrCRM";

export default function Proyectos() {
  return (
    <div className=" pt-5rem">
      <Container className="">
        <Row className="p-0 m-0">
          <Col xs={12} className="p-4 p-md-5">
            <VRweb />
          </Col>
          <Col xs={12} className="p-4 p-md-5">
            <VrCRM />
          </Col>
          <Col xs={12} className="p-4 p-md-5">
            <NoteApp />
          </Col>
          <Col xs={12} className="p-4 p-md-5">
            <SongFinder />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
