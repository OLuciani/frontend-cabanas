import React from 'react';
import "./Home.css";
import imageCabañaPortada4 from "./imgHome/cabaña_pexels-photo-259618.jpeg";
//import imageCabañaPortada3 from "./imgHome/imagePortada2.jpg";
import imageCabañaPortada2 from "./imgHome/cabin-5724699_1280.jpg";
import imageCabañaPortadaCompleta from "./imgHome/image1_country-house-5498652_1280.jpg";
import imageCabañaPortada from "./imgHome/country-house-5498652_1280.jpg";
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import FiltroFechas from '../filtroFechas/FiltroFechas';

const Home = () => {
  //const startEndDate = useContext(Context);
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
            <FiltroFechas />
          </div>

          <h3 className='titulo-por-que'>¿ Por qué alojarse en cabañas ?</h3>

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