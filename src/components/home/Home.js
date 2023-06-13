import React from 'react';
import "./Home.css";
import imageCabañaPortada4 from "./imgHome/cabaña_pexels-photo-259618.jpeg";
//import imageCabañaPortada3 from "./imgHome/imagePortada2.jpg";
import imageCabañaPortada2 from "./imgHome/cabin-5724699_1280.jpg";
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
            <img className='image-portada' src={imageCabañaPortada} alt="Imagen Cabaña"></img>
          </div>

          <div className='contenedor-date-picker'>
            <FiltroFechas />
          </div>

          <div className='div-portada2'>
            <img className='image-portada2' src={imageCabañaPortada2} alt="Imagen Cabaña" />

            <div className='div-texto-portada2'>
              <p className='texto-portada2'>Si quieres disfrutar de la tranquilidad y la belleza de las montañas tienes que venirllllllll llllllllll llllllll llllllllll lllllllll lllllll llllll llllllllll lllllll lllllllll oooooo ooooo ooooooo oooo oooooo oooo ooouiuuuuuuu iiiiiii ii</p>
            </div>
          </div>

          <div className='div-portada3'>
            <div className='div-texto-portada3'>
              <p className='texto-portada3'>Si quieres disfrutar de la tranquilidad y la belleza de las montañas tienes que venir jjssss ssss ssssss ssssss ssssss ssssssjjj jjjjjjjjjj jjjjjjj  jjjjjjj jjjjjjjj jjjjjjjj jjjjjjjjj jjjjjj jjjjj jjjjj jjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjjjj</p>
            </div>

            <img className='image-portada3' src={imageCabañaPortada4} alt="Imagen Cabaña" />
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Home;