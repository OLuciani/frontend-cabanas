import React from 'react';
import "./Administrador.css";
import { Link } from "react-router-dom";
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';

const Administrador = () => {
  return (
    <>
        <NavBar />
        <SideBar />
        <div className='contenedor-administrador'>
            <h3 className='titulo-administrador'>Administrador</h3>

            <div className="contenedor-botones-admin">
                <div className="botones-admin">
                    <Link to={"/createCabaña"}>
                        <button className="boton-user-admin">Crear cabaña</button>
                    </Link>

                    <Link to={"/listadoReservas"}>
                        <button className="boton-user-admin">Listado reservas</button>
                    </Link>

                    <Link to={"/usersAndAdminsList"}>
                        <button className="boton-user-admin">Admin. y Usuarios</button>
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Administrador;