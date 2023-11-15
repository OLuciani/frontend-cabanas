import React, { useContext } from 'react';
import { Context } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import "./DetailsUsers.css";



const DetailsUsers = () => {
    const information = useContext(Context);

    const { _id } = useParams();
    console.log(_id);

    const user = information.usersAndAdmins.find((oneUser) => oneUser._id === _id);

     // Verificar si el usuario existe antes de intentar acceder a sus propiedades
     if (!user) {
        return <p className='message-cargando-details-users'>Cargando...</p>; // O cualquier otro mensaje de carga
    }

  return (
    <>
        <h3 className='titulo-details-users'>Detalles del Administrador o Usuario</h3>

        <div className='contenedor-details-users'>
            <div className="contenedor-un-user-admin box-details-users">
                <article className='article-details-users'>
                <p><b>Nombre:</b> {user.user_name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Password:</b> {user.password}</p>
                </article>
            </div>
        </div>

        <div className="contenedor-botones-admin">
            <div className="botones-admin">
                <Link to={`/updateUser/${_id}`}>
                <button className="boton-editar">Editar admin/user</button>
                </Link>

                <Link to={`/deleteUser/${_id}`} >
                <button className="boton-eliminar">Eliminar admin/user</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default DetailsUsers;