/* import React from "react";
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

      <Footer />
    </>
  );
};

export default DetallesCabana; */






/* import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import "./DetallesCabana.css";
import { Carousel, Container } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import Footer from "../footer/Footer";
import Reservar from "../reservar/Reservar";

const DetallesCabana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infoBD = useContext(Context);
  const { _id } = useParams();
  let cabaña = infoBD.data.find((cab) => cab._id === _id);
  let images = cabaña.url_images;

  const [ocultarContenedor, setOcultarContenedor] = useState("");
  const [mostrarComponenteReservar, setMostrarComponenteReservar] = useState(false);

  //console.log(infoBD.startDate);

  const onClickOcultar = () => {
    setOcultarContenedor("ocultar-cont-det-cab");
    setMostrarComponenteReservar(true);
  }

  return (
    <>
      <NavBar />

      <div className={`contenedor-detalles-cabana ${ocultarContenedor}`}>

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
          ? <button className="boton-fechas-disponibles" onClick={onClickOcultar}>Iniciar Reserva</button>

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

      {
        mostrarComponenteReservar ? <Reservar /> : null
      }   

      <Footer />
    </>
  );
};

export default DetallesCabana; */




import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import "./DetallesCabana.css";
import { Carousel, Container } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import Footer from "../footer/Footer";
import ModalReservar from "../modals/modalReservar/ModalReservar";
import ModalUsuarioNoRegistrado from "../modals/modalUsuarioNoRegistrado/ModalUsuarioNoRegistrado";

const DetallesCabana = () => {
  const infoBD = useContext(Context);

  let location = useLocation();
  const [shouldFetchData, setShouldFetchData] = useState(false);

  // Obtener el token JWT del almacenamiento local (localStorage)
  const token = localStorage.getItem("token");

  /* useEffect(() => {
    if (shouldFetchData) {
      // Realizo una llamada a la API para obtener los datos actualizados
      //fetch('https://cabanas-backend.onrender.com/api/list') 
      fetch('http://localhost:5005/api/list')
        .then((res) => res.json())
        .then((allCabañas) => {
          infoBD.setData(allCabañas);
          setShouldFetchData(false); // Establezco shouldFetchData a false después de actualizar los datos
        })
        .catch((error) => console.log(error));
    }
  }, [shouldFetchData, infoBD]); */

  useEffect(() => {
    if (shouldFetchData) {
      // Realiza una llamada a la API para obtener los datos actualizados
      //fetch('http://localhost:5005/api/list', {
      fetch('https://cabanas-backend.onrender.com/api/list', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Agrega el token de autorización
        }
      })
      .then((res) => res.json())
      .then((allCabañas) => {
        infoBD.setData(allCabañas);
        setShouldFetchData(false); // Establece shouldFetchData a false después de actualizar los datos
      })
      .catch((error) => console.log(error));
    }
  }, [shouldFetchData, infoBD, token]);

  useEffect(() => {
    // Establezco shouldFetchData a true cada vez que cambie la ubicación
    setShouldFetchData(true);
    //console.log("Se ha navegado a la vista de Cabanas");
  }, [location]);
  
  //const infoBD = useContext(Context);
  const { _id } = useParams();
  let cabaña = infoBD.data.find((cab) => cab._id === _id);
  let images = cabaña.url_images;

  //const [ocultarContenedor, setOcultarContenedor] = useState("");
  const [mostrarComponenteReservar, setMostrarComponenteReservar] = useState(false);
  const [mostrarModalUsuarioNoRegistrado, setMostrarModalUsuarioNoRegistrado] = useState("");

  const onClickOcultar = () => {
    const token = localStorage.getItem("token");
    if (token) {
      //setOcultarContenedor("ocultar-cont-det-cab");
      setMostrarComponenteReservar(true);
    } else {
      setMostrarModalUsuarioNoRegistrado("mostrar-modal-no-registrado");
    }
  };

  const onClickOcultarModalUNR = () => {
    setMostrarModalUsuarioNoRegistrado("");
  }

  useLayoutEffect(() => {
    const handleBeforeUnload = () => {
      infoBD.setStartDate("");
      infoBD.setEndDate("");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [infoBD]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickOcultarReservar = () => {
    setMostrarComponenteReservar(false);
  }
  return (
    <>
      <NavBar />

      <div className={`contenedor-detalles-cabana`}> {/*En esta clase iba esto ${ocultarContenedor} */}
        <Container className="carousel-container">
          <Carousel fade>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="imagen-carousel"
                  src={`https://cabanas-backend.onrender.com/${image}`}
                  /* src={`http://localhost:5005/${image}`}  */
                  alt={`Imagen ${index}`}
                />
                <Carousel.Caption className="carousel-caption">
                  <p>{cabaña.name} ({index + 1})</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

         {/* Mostrar los botones "Editar cabaña" y "Eliminar cabaña"solo si el usuario es administrador */}
         {localStorage.getItem('role') === 'admin' && ( 
            <div className="contenedor-botones-admin">
              <div className="botones-admin">
                <Link to={`/updateCabana/${_id}`}>
                  <button className="boton-editar">Editar cabaña</button>
                </Link>

                <Link to={`/verFechas/${cabaña._id}`}>
                  <button className="boton-fechas-disponibles">Fechas Disponibles</button>
                </Link>

                <Link to={`/deleteCabana/${_id}`}>
                  <button className="boton-eliminar">Eliminar cabaña</button>
                </Link>
              </div>
            </div>
          )}
       


        {/* {infoBD.startDate !== "" && infoBD.endDate !== "" ? (
          <button className="boton-fechas-disponibles" onClick={onClickOcultar}>
            Iniciar Reserva
          </button>
        ) : (
          <Link to={`/verFechas/${cabaña._id}`}>
            <p className="boton-fechas-disponibles">Fechas Disponibles</p>
          </Link>
        )} */}

        {infoBD.startDate !== "" && infoBD.endDate !== "" &&  
          (<button className="boton-fechas-disponibles" onClick={onClickOcultar}>
            Iniciar Reserva
          </button>)
        }

       {/*  {
          localStorage.getItem("role") === "admin" && 
          (<Link to={`/verFechas/${cabaña._id}`}>
            <p className="boton-fechas-disponibles">Fechas Disponibles</p>
          </Link>)
        } */}

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

      {/* {infoBD.startDate !== "" && infoBD.endDate !== "" ? (
          <button className="boton-fechas-disponibles" onClick={onClickOcultar}>
            Iniciar Reserva
          </button>
        ) : (
          <Link to={`/verFechas/${cabaña._id}`}>
            <button className="boton-fechas-disponibles">Fechas Disponibles</button>
          </Link>
        )} */}

        {
          <div className="container-modal-usuario-no-registrado">
            <div className={`usuario-no-registrado ${mostrarModalUsuarioNoRegistrado}`}>
              <p onClick={onClickOcultarModalUNR} className={`close-usuario-no-registrado`}>X</p>

              <ModalUsuarioNoRegistrado />
            </div>
          </div>
        }

      {mostrarComponenteReservar 
      ? <div className="content-reservar">
          <div className="reservar">
            <p onClick={onClickOcultarReservar} className="close-confirmar-fechas">X</p>
            <ModalReservar />
          </div>
      </div> : null}

      <SideBar />

      <Footer />
    </>
  );
};

export default DetallesCabana;

