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


import React from 'react';
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
        {informacion.data.map((oneCabaña) => (
          <div className='contenedor-cabañas' key={oneCabaña._id}>
            <h3 className='name-cabaña'>{oneCabaña.name}</h3>
            <article>
              <Link to={`/detallesCabana/${oneCabaña._id}`}>
                <div className='box-cabaña'>
                  <div className='contenedor-image-cabaña1'>
                    <img
                      className='image-cabañas'
                      src={`https://cabanas-backend.onrender.com/${oneCabaña.url_image}`}
                      alt={`Imagen ${oneCabaña.name}`}
                    />
                  </div>
                  <div className="contenedor-image-cabaña2">
                    {oneCabaña.url_images.map((image, index) => {
                      if (index > 0 && index <= 4) {
                        return (
                          <div className='div-images-cabaña' key={index}>
                            <img
                              className='images-cabaña'
                              src={`https://cabanas-backend.onrender.com//${image}`}
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
            <p className='cartel-cabanas-mas-3'>+3</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cabanas;