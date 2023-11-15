import React, { useContext, useState } from 'react';
import { Context } from "../context/Context";
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import "./DeleteReserva.css";

const DeleteReserva = () => {
    const { _id } = useParams();
    console.log(_id);

    const infoBD = useContext(Context);
    const reserva = infoBD.listadoDeReservas.find((reservation) => reservation._id === _id);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const deleteListadoDeReservas = async () => {
        try {
          // Actualizar la lista de reservas en el context
          //const response = await fetch('http://localhost:5005/api/reservation_register', {  
          const response = await fetch('https://cabanas-backend.onrender.com/api/reservation_register', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const todasLasReservas = await response.json();
          infoBD.setListadoDeReservas(todasLasReservas);
        } catch (error) {
          console.log(error);
        }
      };

    const handleDeleteReserva = async () => {
        try {
            //const response = await fetch(`http://localhost:5005/api/reservation_delete/${_id}`, { 
            const response = await fetch(` https://cabanas-backend.onrender.com/api/reservation_delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                console.log('Reserva eliminada exitosamente');

                // Actualizar listadoDeReservas
                deleteListadoDeReservas();

                // Redirigir a la página donde se muestran todas las reservas después de la eliminación y controlar si se eliminó correctamente.
                navigate(`/listadoReservas`);
            } else {
                const errorData = await response.json();
                console.log('Error al eliminar reserva:', errorData.error);
                setErrorMessage('Error al eliminar la reserva');
            }
        } catch (error) {
            console.error('Error al eliminar reserva:', error);
            setErrorMessage('Error al eliminar la reserva');
        }
    };

  return (
    <>

        <NavBar />
        <SideBar />

        <div className='contenedor-eliminar-cabaña'>
        <h3 className='titulo-delete-reserva'>Eliminar reserva</h3>

            {reserva ? (
            <div className='contenedor-advertencia-delete-cabana'>
                <p className='mensaje-advertencia-delete-cabana'>ATENCIÓN !! <br />Estás por eliminar de la Base de Datos la reserva del cliente {reserva.nombre} {reserva.apellido}</p>
                
            </div>
            ) : null}

            <button className='boton-delete-cabana' onClick={handleDeleteReserva}>Eliminar reserva</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <Footer />
    </>
  )
}

export default DeleteReserva;