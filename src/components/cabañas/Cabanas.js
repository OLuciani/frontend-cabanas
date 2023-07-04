/* import React from 'react';
import NavBar from '../navBar/NavBar';
import "./Cabanas.css";
import Footer from '../footer/Footer';
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';

const Cabanas = () => {
  let informacion = useContext(Context);

  return (
    <>
      <NavBar />
      <SideBar />
        <div className='contenedor-general-cabañas'>
          
            {
              informacion.data.map((oneCabaña) => {
                return (   
                  <>
                    <div className='contenedor-cabañas' key={oneCabaña._id}>
                    <h3 className='name-cabaña'>{oneCabaña.name}</h3>
                      <article >

                          <Link  to={`/detallesCabana/${oneCabaña._id}`}>
                            <div className='box-cabaña'>
                              <div className='contenedor-image-cabaña1'>
                                <img className='image-cabañas' src={`https://cabanas-backend.onrender.com/${oneCabaña.url_image}`} alt={`Imagen ${oneCabaña.name}`} />
                              </div>
                              <div className="contenedor-image-cabaña2" >
                                {
                                  oneCabaña.url_images.map((image, index) => {
                                    
                                    if(index > 0 && index <= 4) {
                                      return (
                                      <div className='div-images-cabaña' key={index}>
                                        <img className='images-cabaña' src={`https://cabanas-backend.onrender.com//${image}`} alt={`Imagen ${image}`} />
                                      </div>
                                      )
                                    }
                                    return null;
                                  })
                                }
                              </div>
                            </div>
                            
                          </Link>
                      </article>
                      <p className='cartel-cabanas-mas-3'>+3</p>
                    </div>
                  </>
                )
              }) 
            }
          
        </div>

      <Footer />
    </>
  )
}

export default Cabanas; */

/* import React from "react";
import NavBar from "../navBar/NavBar";
import "./Cabanas.css";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

const Cabanas = () => {
  let informacion = useContext(Context);

  informacion.startDate = "";
  informacion.endDate = "";
  //console.log(informacion.startDate);
  //console.log(informacion.endDate);
  
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="contenedor-general-cabañas">
        {informacion.data.length < 1 ? (
          <p className="message-cargando-imagenes-cabanas">Cargando imágenes...</p>
        ) : (
          informacion.data.map((oneCabaña) => (
            <div className="contenedor-cabañas" key={oneCabaña._id}>
              <h3 className="name-cabaña">{oneCabaña.name}</h3>
              <article>
                <Link to={`/detallesCabana/${oneCabaña._id}`}>
                  <div className="box-cabaña">
                    <div className="contenedor-image-cabaña1">
                      <img
                        className="image-cabañas"
                        src={`https://cabanas-backend.onrender.com/${oneCabaña.url_image}`}
                        alt={`Imagen ${oneCabaña.name}`}
                      />
                    </div>
                    <div className="contenedor-image-cabaña2">
                      {oneCabaña.url_images.map((image, index) => {
                        if (index > 0 && index <= 4) {
                          return (
                            <div className="div-images-cabaña" key={index}>
                              <img
                                className="images-cabaña"
                                src={`https://cabanas-backend.onrender.com/${image}`}
                                alt={`Imagen ${image}`}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </Link>
              </article>
              <p className="cartel-cabanas-mas-3">+3</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cabanas; */



/* import React, { useContext, useEffect } from "react";
//import { useLocation } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./Cabanas.css";
import Footer from "../footer/Footer";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

const Cabanas = () => {
  let informacion = useContext(Context);
  //let location = useLocation();

  informacion.startDate = "";
  informacion.endDate = "";

  useEffect(() => {
    // Lógica para refrescar los datos cuando se navega a la vista de Cabanas
    // Por ejemplo, puedes hacer una llamada a la API para obtener los datos actualizados
    // y luego actualizar el estado de "informacion.data"
    fetch('https://cabanas-backend.onrender.com/api/list')
          .then((res) => res.json())
          .then((allCabañas) => {
            informacion.setData(allCabañas);
          })
          .catch((error) => console.log(error));
    console.log("Se ha navegado a la vista de Cabanas");
  }, []);

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="contenedor-general-cabañas">
        {informacion.data.length < 1 ? (
          <p className="message-cargando-imagenes-cabanas">Cargando imágenes...</p>
        ) : (
          informacion.data.map((oneCabaña) => (
            <div className="contenedor-cabañas" key={oneCabaña._id}>
              <h3 className="name-cabaña">{oneCabaña.name}</h3>
              <article>
                <Link to={`/detallesCabana/${oneCabaña._id}`}>
                  <div className="box-cabaña">
                    <div className="contenedor-image-cabaña1">
                      <img
                        className="image-cabañas"
                        src={`https://cabanas-backend.onrender.com/${oneCabaña.url_image}`}
                        alt={`Imagen ${oneCabaña.name}`}
                      />
                    </div>
                    <div className="contenedor-image-cabaña2">
                      {oneCabaña.url_images.map((image, index) => {
                        if (index > 0 && index <= 4) {
                          return (
                            <div className="div-images-cabaña" key={index}>
                              <img
                                className="images-cabaña"
                                src={`https://cabanas-backend.onrender.com/${image}`}
                                alt={`Imagen ${image}`}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </Link>
              </article>
              <p className="cartel-cabanas-mas-3">+3</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cabanas; */



import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./Cabanas.css";
import Footer from "../footer/Footer";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

const Cabanas = () => {
  let informacion = useContext(Context);
  let location = useLocation();
  const [shouldFetchData, setShouldFetchData] = useState(false);

  informacion.startDate = "";
  informacion.endDate = "";

  useEffect(() => {
    if (shouldFetchData) {
      // Realizo una llamada a la API para obtener los datos actualizados
      fetch('https://cabanas-backend.onrender.com/api/list')
        .then((res) => res.json())
        .then((allCabañas) => {
          informacion.setData(allCabañas);
          setShouldFetchData(false); // Establezco shouldFetchData a false después de actualizar los datos
        })
        .catch((error) => console.log(error));
    }
  }, [shouldFetchData, informacion]);

  useEffect(() => {
    // Establezco shouldFetchData a true cada vez que cambie la ubicación
    setShouldFetchData(true);
    //console.log("Se ha navegado a la vista de Cabanas");
  }, [location]);

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="contenedor-general-cabañas">
        {informacion.data.length < 1 ? (
          <p className="message-cargando-imagenes-cabanas">Cargando imágenes...</p>
        ) : (
          informacion.data.map((oneCabaña) => (
            <div className="contenedor-cabañas" key={oneCabaña._id}>
              <h3 className="name-cabaña">{oneCabaña.name}</h3>
              <article>
                <Link to={`/detallesCabana/${oneCabaña._id}`}>
                  <div className="box-cabaña">
                    <div className="contenedor-image-cabaña1">
                      <img
                        className="image-cabañas"
                        src={`https://cabanas-backend.onrender.com/${oneCabaña.url_image}`}
                        alt={`Imagen ${oneCabaña.name}`}
                      />
                    </div>
                    <div className="contenedor-image-cabaña2">
                      {oneCabaña.url_images.map((image, index) => {
                        if (index > 0 && index <= 4) {
                          return (
                            <div className="div-images-cabaña" key={index}>
                              <img
                                className="images-cabaña"
                                src={`https://cabanas-backend.onrender.com/${image}`}
                                alt={`Imagen ${image}`}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </Link>
              </article>
              <p className="cartel-cabanas-mas-3">+3</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cabanas;
