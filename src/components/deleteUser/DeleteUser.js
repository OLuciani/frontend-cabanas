import React, { useContext, useState } from 'react';
import { Context } from "../context/Context";
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import "./DeleteUser.css";

const DeleteUser = () => {
    const { _id } = useParams();
    console.log(_id);

    const infoBD = useContext(Context);
    const usuario = infoBD.usersAndAdmins.find((oneUser) => oneUser._id === _id);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const actualizarListadoDeUsuarios = async () => {
        try {
          // Actualizar la lista de reservas en el context
          //const response = await fetch('http://localhost:5005/api/register_user_list', {  
          const response = await fetch('https://cabanas-backend.onrender.com/api/register_user_list', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const todosLosUsuarios = await response.json();
          infoBD.setUsersAndAdmins(todosLosUsuarios);
        } catch (error) {
          console.log(error);
        }
      };

    const handleDeleteUsuario = async () => {
        try {
            //const response = await fetch(`http://localhost:5005/api/delete_user/${_id}`, {  
            const response = await fetch(`https://cabanas-backend.onrender.com/api/delete_user/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                console.log('Usuario eliminado exitosamente');

                // Actualizar listadoDeReservas
                actualizarListadoDeUsuarios();

                // Redirigir a la página donde se muestran todas los usuarios y administradores después de la eliminación y controlar si se eliminó correctamente.
                navigate(`/usersAndAdminsList`);
            } else {
                const errorData = await response.json();
                console.log('Error al eliminar usuario:', errorData.error);
                setErrorMessage('Error al eliminar usuario');
            }
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            setErrorMessage('Error al eliminar la usuario');
        }
    };

  return (
    <>

        <NavBar />
        <SideBar />

        <div className='contenedor-eliminar-cabaña'>
        <h3 className='titulo-delete-reserva'>Eliminar Usuario</h3>

            {usuario ? (
            <div className='contenedor-advertencia-delete-cabana'>
                <p className='mensaje-advertencia-delete-cabana'>ATENCIÓN !! <br />Estás por eliminar de la Base de Datos al usuario: {usuario.user_name}</p>
                
            </div>
            ) : null}

            <button className='boton-delete-cabana' onClick={handleDeleteUsuario}>Eliminar usuario</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <Footer />
    </>
  )
}

export default DeleteUser;