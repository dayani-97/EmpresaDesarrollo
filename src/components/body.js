import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logotipo from "../logo.png";
import {
  Img,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";

const Body = () => {
  return (
    <>
      <Row>
        <Col md="6" sm="12" xs="12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.computerworld.es/archivos/202110/christina-wocintechchat-com-6dv3pe-jnsg-unsplash.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.euroinnova.edu.es/img/subidasEditor/source-4280758_640-1635295791.webp"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.ourcodeworld.com/public-media/articles/7-consideration-when-adopting-new-software-development-tools-61a4f6b85f44c.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md="6" sm="12" xs="12">
          <div class="col-md-12" id="mensaje">
            <h2>Bienvenido a Desarrollo de Software</h2>
            <h5>
              Somos una empresa dedicada a asesorar y solucionar las
              problem??ticas o necesidades tecnol??gicas de tu empresa, negocio u
              hogar. Contamos con m??s de 15 a??os de experiencia en el mercado.
              En las ramas de: Asesor??a, Desarrollo de Sistemas y P??ginas Web,
              Soporte T??cnico, Redes, Telefon??a, Seguridad, Control, entre
              otras. Somos distribuidores de la principales marcas en equipos de
              computo, impresi??n, entre otros.
            </h5>
          </div>
        </Col>
      </Row>
      <hr />
      <br />
      <center>
        <h3>Nuestros Servicios</h3>
      </center>
      <br /> <br />
      <Row>
        <Col md="4" sm="12" xs="12">
          <Card>
            <Card.Img
              variant="top"
              src="http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/blogs/apps-ph.jpg"
            />
            <Card.Body>
              <Card.Title>Desarrollo M??vil</Card.Title>
              <Card.Text>
                El desarrollo de aplicaciones m??viles es el acto o proceso
                mediante el cual se desarrolla una aplicaci??n m??vil para
                dispositivos m??viles, como asistentes digitales personales,
                asistentes digitales empresariales o tel??fonos m??viles.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Android</ListGroupItem>
              <ListGroupItem>iOS</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Cotizar Ahora</Card.Link>
              <Card.Link href="#">Ver m??s</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" sm="12" xs="12">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.solbyte.com/blog/wp-content/uploads/desarrollo-web-a-medida.png"
            />
            <Card.Body>
              <Card.Title>Desarrollo Web</Card.Title>
              <Card.Text>
                Desarrollo web es un t??rmino que define la creaci??n de sitios
                web para Internet o una intranet. Para conseguirlo se hace uso
                de tecnolog??as de software del lado del servidor y del cliente
                que involucran
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Android</ListGroupItem>
              <ListGroupItem>iOS</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Cotizar Ahora</Card.Link>
              <Card.Link href="#">Ver m??s</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" sm="12" xs="12">
          <Card>
            <Card.Img
              variant="top"
              src="http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/blogs/apps-ph.jpg"
            />
            <Card.Body>
              <Card.Title>Desarrollo M??vil</Card.Title>
              <Card.Text>
                El desarrollo de aplicaciones m??viles es el acto o proceso
                mediante el cual se desarrolla una aplicaci??n m??vil para
                dispositivos m??viles, como asistentes digitales personales,
                asistentes digitales empresariales o tel??fonos m??viles.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Android</ListGroupItem>
              <ListGroupItem>iOS</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Cotizar Ahora</Card.Link>
              <Card.Link href="#">Ver m??s</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Body;
