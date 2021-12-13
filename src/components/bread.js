import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logotipo from "../logo.png";
import {
  Img,
  Button,
  Offcanvas,
  FormControl,
  Form,
  Container,
  Navbar,
  Nav,
  Breadcrumb,
} from "react-bootstrap";

const Bread = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>#####</Breadcrumb.Item>
        <Breadcrumb.Item active>####</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Bread;
