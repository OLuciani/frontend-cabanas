import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import imageCabañaPortada4 from "./imgHome/cabaña_pexels-photo-259618.jpeg";
import imageCabañaPortada2 from "./imgHome/cabin-5724699_1280.jpg";
import imageCabañaPortadaCompleta from "./imgHome/image1_country-house-5498652_1280.jpg";
import imageCabañaPortada from "./imgHome/country-house-5498652_1280.jpg";
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import FiltroFechas from '../filtroFechas/FiltroFechas';
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";

const Home = () => {
  let informacion = useContext(Context);
  
  let location = useLocation();
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    if (shouldFetchData) {
      // Realizo una llamada a la API para obtener los datos actualizados
      fetch('https://cabanas-backend.onrender.com/api/list')
      /* fetch('http://localhost:5005.com/api/list') */
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
    //console.log("Se ha navegado a la vista de Home");
  }, [location]);

//poner el mismo useEffect que en el componente Cabanas para que se actualice inf y no me tire cabanas ya reservadas


  return (
    <>
        <NavBar />
        <SideBar />
        <div className='contenedor-home'>

          <div className='box-image-portada'>
            <p className='titulo-home'>Hernandez Cabañas</p>
            <img className='image-portada-completa' src={imageCabañaPortadaCompleta} alt="Imagen Cabaña"></img>
            <img className='image-portada' src={imageCabañaPortada} alt="Imagen Cabaña"></img>
          </div>

          <div className='contenedor-date-picker'>
            <FiltroFechas datos={null} />
          </div>

          <h3 className='titulo-por-que'>Por qué alojarse en cabañas ?</h3>

          <div className='div-portada2'>
            <img className='image-portada2' src={imageCabañaPortada2} alt="Imagen Cabaña" />

            <div className='div-texto-portada2'>
              <p className='texto-portada2'>Por norma general al viajar los turistas suelen alojarse en hoteles, y esto resulta en costos elevados para comer en restaurantes. Al alojarte en una cabaña, contarás con una cocina completamente equipada.</p>
            </div>
          </div>

          <div className='div-portada3'>
            <div className='div-texto-portada3'>
              <p className='texto-portada3'>Las habitaciones de hotel pueden quedarse pequeñas o has de reservar varias habitaciones. Si viajas con tus hijos o con amigos, se puede conseguir un ahorro sustancial arrendando una cabaña, ya que suelen disponer de varias habitaciones. La opción ideal para parejas, amigos y familia.</p>
            </div>

            <img className='image-portada3' src={imageCabañaPortada4} alt="Imagen Cabaña" />
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Home;