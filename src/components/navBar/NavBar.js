import React from 'react';
import { Link } from 'react-router-dom';

import ComponentNavbar from '../componentNavBar/ComponentNavBar';
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className='div-navbar'>
        <nav className="navBar">
            <div className='box-icono-nombre'>
              <Link to="/"><span className='nombre-empresa'>Hernandez Cabañas</span></Link> 
            </div>
        
          <div className="button-navBar">
            <Link to="/cabanas"><ComponentNavbar name={"Cabañas"} /></Link>
          </div>

          {/* <div className="button-navBar">
            <Link to="/verFechas"><ComponentNavbar name={"Ver fechas"} /></Link>
          </div> */}
          
          <div className="button-navBar">
            <Link to="/contact"><ComponentNavbar name={"Contacto"} /></Link>
          </div>
          
          <i onClick={()=>{let occult = document.querySelector(".sidebar");
          occult.style.display = "block"}} className="fa-solid fa-bars icono-burger image-icon"></i>
        </nav>
      </div>
  )
}

export default NavBar;