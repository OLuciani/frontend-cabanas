import React from 'react';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componentNavBar/ComponentNavBar';
import "./SideBar.css";

const SideBar = () => {
  return (
      <>
        <div className='sidebar'> 
            <p onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="close-sidebar">X
            </p>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/"><ComponentNavbar name={"Home"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/cabanas"><ComponentNavbar name={"Cabañas"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/contact"><ComponentNavbar name={"Contacto"} /></Link>
            </div>
        </div> 
      </>
  )
}

export default SideBar;