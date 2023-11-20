import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import "./UsersAndAdminsList.css";
const UsersAndAdminsList = () => {
    let info = useContext(Context);
    //console.log(info.usersAndAdmins)
  return (
    <>
        <NavBar />
        <SideBar />

        <div className='contenedor-general-users-admins'>

            <h3 className='titulo-users-admins'>Listado de Administradores</h3>
            <div className="contenedor-users-and-admins">
                {info.listadoDeReservas.length < 1 ? (
                    <p className="message-no-users">No hay administradores para mostrar...</p>
                ) : (
                    info.usersAndAdmins.map((user) => (
                    
                    user.es_admin ?    
                    <Link to={`/detailsUsers/${user._id}`} key={user._id}>
                    <div className="contenedor-un-user-admin" /* key={user._id} */>
                        <article>
                        <p><b>Nombre:</b> {user.user_name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        {/* <p><b>Password:</b> {user.password}</p> */}
                        </article>
                    </div>
                    </Link>
                    : null
                        
                    ))
                )}
            </div>

            <h3 className='titulo-users-admins'>Listado de Usuarios</h3>
            <div className="contenedor-users-and-admins">
                {info.listadoDeReservas.length < 1 ? (
                    <p className="message-no-users">No hay usuarios para mostrar...</p>
                ) : (
                    info.usersAndAdmins.map((user) => (
                    
                   !user.es_admin ?    
                   <Link to={`/detailsUsers/${user._id}`} key={user._id}>
                    <div className="contenedor-un-user-admin" /* key={user._id} */>
                        <article>
                        <p><b>Nombre:</b> {user.user_name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        {/* <p><b>Password:</b> {user.password}</p> */}
                        </article>
                    </div>
                    </Link>
                    : null
                        
                    ))
                )}
            </div>
        </div>

      <Footer />


    </>
  )
}

export default UsersAndAdminsList;