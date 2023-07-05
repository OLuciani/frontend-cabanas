import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import "./DetallesCabana.css";
import { Carousel, Container } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import Footer from "../footer/Footer";

const DetallesCabana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infoBD = useContext(Context);
  const { _id } = useParams();
  let cabaña = infoBD.data.find((cab) => cab._id === _id);
  let images = cabaña.url_images;

  //console.log(infoBD.startDate);

  return (
    <>
      <NavBar />

      {/* <SideBar className="bajar-sideBar" /> */}

      <div className="contenedor-detalles-cabana">

        <Container className="carousel-container">
          <Carousel fade>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="imagen-carousel"
                  src={`https://cabanas-backend.onrender.com/${image}`}
                  alt={`Imagen ${index}`}
                />
                <Carousel.Caption className="carousel-caption">
                  <p>{cabaña.name} ({index + 1})</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

        <SideBar />

        { infoBD.startDate !== "" && infoBD.endDate !== "" 
          ? <Link to={`/reservar/${cabaña._id}`}>
              <button className="boton-fechas-disponibles">Iniciar Reserva</button>
            </Link> 

          : <Link to={`/verFechas/${cabaña._id}`}>
              <button className="boton-fechas-disponibles">Fechas Disponibles</button>
            </Link> 
        }

        <div className="contenedor-items-detalles-cabaña">
          <p className="price-detalles-cabaña">
            <b>Cantidad de habitaciones:</b> {cabaña.rooms}
          </p>
        </div>

        <div className="contenedor-items-detalles-cabaña">
          <p className="description-detalles-cabaña">
            <b>Descripción:</b> {cabaña.description}
          </p>
        </div>

        <div className="contenedor-items-detalles-cabaña">
          <p className="services-detalles-cabaña">
            <b>Servicios:</b> {cabaña.services}
          </p>
        </div>

        <div className="contenedor-items-detalles-cabaña">
          <p className="price-detalles-cabaña">
            <b>Precio por día:</b> $ {cabaña.price}
          </p>
        </div>
      </div>

      {/* <SideBar className="bajar-sideBar" /> */}

      <Footer />
    </>
  );
};

export default DetallesCabana;

