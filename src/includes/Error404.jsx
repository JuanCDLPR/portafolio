import React, { useEffect } from "react";
import Error from "../assets/404error.png";

const Error404 = () => {
  return (
    <div
      className="w-100 h-100 d-flex justify-content-center mt-5 pt-5"
      style={{
        minHeight: "calc(100vh - 5rem)",
        //background: "#F5F1E9",
        backgroundColor: "#c3cbdc",
        backgroundImage: "linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)",
      }}
    >
      <div>
        <div>
          <center>
            <img
              src={Error}
              className="img-fluid mt-5"
              style={{ maxWidth: "100px" }}
              alt=""
            />
          </center>
        </div>
        <h4 className="font-Oxygen mt-5 pt-5">
          No se encontró el recurso solicitado
        </h4>
      </div>
    </div>
  );
};

export default Error404;
