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
  Card,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <footer color="black" className="page-footer font-small pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Desarrollo de Software</h5>
              <p>
                Te invitamos a visitar nuestra lista de productos y servicios
                donde encontrarás una amplia gama en todo lo relacionado a
                tecnología
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">SERVICIOS</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Cómputo</a>
                </li>
                <li>
                  <a href="#!">Comunicación</a>
                </li>
                <li>
                  <a href="#!">Control</a>
                </li>
                <li>
                  <a href="#!">Desarrollo Web, Móvil</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Redes Sociales</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <a href="#!">Instagram</a>
                </li>
                <li>
                  <a href="#!">Twiter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 DesarrolloSoftware:
          <a href="#"> DesarrolloSoftware.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
