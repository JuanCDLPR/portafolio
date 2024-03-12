import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import { IconButton } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className=" pt-5rem">
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="fs-4 text-center w-50">
          Si estás interesado en{" "}
          <span
            style={{
              color: "#5425B3",
            }}
          >
            contratarme
          </span>
          ,{" "}
          <span
            style={{
              color: "#5425B3",
            }}
          >
            llámame
          </span>
          , enviame un{" "}
          <span
            style={{
              color: "#5425B3",
            }}
          >
            correo electrónico
          </span>{" "}
          o{" "}
          <span
            style={{
              color: "#5425B3",
            }}
          >
            conéctate{" "}
          </span>
          y chatea conmigo a través de LinkedIn
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <div className=" cardSty fs-4  p-4 m-4 p-md-5 m-md-5 mb-5 ">
          <div className=" d-flex  fs-4  flex-row align-items-start mt-1">
            <div className=" flex-grow-0">
              <BsFillTelephoneFill className="me-2" />
            </div>
            <div className=" flex-grow-1 ps-3">
              <a
                href="tel:+52 325 100 7835"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {" "}
                +52 325 100 7835
              </a>
            </div>
            <div />
          </div>
          <div className=" d-flex  fs-4  flex-row align-items-start mt-4">
            <div className=" flex-grow-0">
              <IoMdMail className="me-2" />
            </div>
            <div className=" flex-grow-1 ps-3">
              <a
                href="mailto:JuanCDLPR@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                JuanCDLPR@gmail
                <span
                  style={{
                    fontFamily: "serif",
                    fontWeight: "bold",
                  }}
                >
                  .
                </span>
                com
              </a>
            </div>
            <div />
          </div>
          <div className=" d-flex  fs-4  flex-row align-items-start mt-4">
            <div className=" flex-grow-0">
              <FaLinkedin className="me-2" />
            </div>
            <div className=" flex-grow-1 ps-3">
              <a
                href="https://www.linkedin.com/in/juan-de-la-paz-044989218/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Juan De La Paz
              </a>
            </div>
            <div />
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center pb-5 mb-5">
        <a href="https://github.com/JuanCDLPR" target="_blank" rel="noreferrer">
          <IconButton
            style={{
              marginTop: "40px",
            }}
          >
            <FaGithub
              style={{
                fontSize: "40px",
                color: "#000000",
              }}
            />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
