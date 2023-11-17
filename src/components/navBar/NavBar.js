import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componentNavBar/ComponentNavBar';
import "./NavBar.css";
///import withRole from "../../utils/withRole";
import { Context } from "../context/Context";



const NavBar = () => {
  let informacion = useContext(Context);

  console.log(informacion.usersAndAdmins); //con esto traigo los usuarios y administradores.

  console.log(localStorage); //Con esto veo que tiene el localStorage. Debo modificar en el backend el archivo apiRoute.js para poder traer en el localStorage el id real del usuario, actualmente me esta llegando uno nuevo que se genera al crear el token, pero envia un id que no coincide con el verdadero del usuario. 

  const handleLogout = () => {
    // Eliminar el token y el rol del usuario del local storage
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // Redirigir al usuario a la página de inicio o a donde desees después del cierre de sesión
    window.location.replace('/');
  };


  return (
    <div className='div-navbar'>
        <nav className="navBar">
            <div className='box-icono-nombre'>
              <Link to="/"><span className='nombre-empresa'>Hernandez Cabañas</span></Link> 
            </div>
        
          <div className="button-navBar">
            <Link to="/cabanas"><ComponentNavbar name={"Cabañas"} /></Link>
          </div>

          {/*  <div className="button-navBar">
          {userName ? (
            <span>Bienvenido, {userName}</span>
          ) : (
            <Link to="/login"><ComponentNavbar name={"Iniciar sesión"} /></Link>
          )}
        </div> */}

          {/* <div className="button-navBar">
            <Link to="/verFechas"><ComponentNavbar name={"Ver fechas"} /></Link>
          </div> */}
          
          <div className="button-navBar">
            <Link to="/contact"><ComponentNavbar name={"Contacto"} /></Link>
          </div>

          {/* Mostrar el botón "Crear cabaña" solo si el usuario tiene el rol de "admin" */}
          {localStorage.getItem('role') === 'admin' && (
            <div className="button-navBar">
              <Link to="/admin"><ComponentNavbar name={"Admin"} /></Link>
            </div>
          )}


          <div className="button-navBar">
            <Link to="/registerUser"><ComponentNavbar name={"Registrate"} /></Link>
          </div>

          {localStorage.getItem('role') !== 'admin' && (
          <div className="button-navBar">
            <Link to="/login"><ComponentNavbar name={"Iniciar sesión"} /></Link>
          </div>
          )}

         {/*  <div className="button-navBar">
          {userName ? (
            <span>{userName}</span>
          ) : (
            <Link to="/login"><ComponentNavbar name={"Iniciar sesión"} /></Link>
          )}
        </div> */}

          {/* Mostrar el botón "Cerrar sesión" solo si el usuario tiene el rol de "admin" */}
          {localStorage.getItem('role') === 'admin' && (
          <div className="button-navBar">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
          )}
          
          <i onClick={()=>{let occult = document.querySelector(".sidebar");
          occult.style.display = "block"}} className="fa-solid fa-bars icono-burger image-icon"></i>
        </nav>
      </div>
  )
}

export default NavBar;