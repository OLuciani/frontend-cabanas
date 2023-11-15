import React from 'react';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componentNavBar/ComponentNavBar';
import "./SideBar.css";

const SideBar = () => {
    const handleLogout = () => {
        // Eliminar el token y el rol del usuario del local storage
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    
        // Redirigir al usuario a la página de inicio o a donde desees después del cierre de sesión
        window.location.replace('/');
      };
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

             {/* Mostrar el botón "Crear cabaña" solo si el usuario tiene el rol de "admin" */}
             {localStorage.getItem('role') === 'admin' && (
            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/createCabaña"><ComponentNavbar name={"Crear cabaña"} /></Link>
            </div>
             )}

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/register"><ComponentNavbar name={"Registrate"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/login"><ComponentNavbar name={"Login"} /></Link>
            </div>

            {/* Mostrar el botón "Cerrar sesión" solo si el usuario tiene el rol de "admin" */}
            {localStorage.getItem('role') === 'admin' && (
              <div className="component-sidebar">
                <button onClick={handleLogout}>Cerrar sesión</button>
              </div>
            )}

        </div> 
      </>
  )
}

export default SideBar;