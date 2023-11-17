/* import React from 'react';
import "./DeleteCabana.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const DeleteCabana = () => {
    const { _id } = useParams();
    console.log(_id);

    const infoBD = useContext(Context);
    let cabaña = infoBD.data.find((cab) => cab._id === _id);

  return (
    <>
        <h3 className='titulo-eliminar-cabaña'>Eliminar cabaña</h3>

        <p className='mensaje-advertencia-delete-cabana'>ATENCION !! <br />Estás por eliminar de la Base de Datos la cabaña {`"${cabaña.name}"`}</p>
        
        <button>Eliminar cabaña</button>
    </>
  )
}

export default DeleteCabana; */



import React, { useState } from 'react';
import "./DeleteCabana.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';

const DeleteCabana = () => {
    const { _id } = useParams();
    console.log(_id);

    //const history = useHistory();
    const infoBD = useContext(Context);
    const cabaña = infoBD.data.find((cab) => cab._id === _id);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleDeleteCabana = async () => {
        try {
            //const response = await fetch(`http://localhost:5005/api/delete_cabana/${_id}`, {
            const response = await fetch(`https://cabanas-backend.onrender.com/api/delete_cabana/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                console.log('Cabaña eliminada exitosamente');
                // Actualizar el contexto si es necesario
                // infoBD.updateData(...) por ejemplo

                // Redirigir a la página donde se muestran todas las cabañas después de la eliminación y controlar si se eliminó correctamente.
                navigate(`/cabanas`);
            } else {
                const errorData = await response.json();
                console.log('Error al eliminar cabaña:', errorData.error);
                setErrorMessage('Error al eliminar la cabaña');
            }
        } catch (error) {
            console.error('Error al eliminar cabaña:', error);
            setErrorMessage('Error al eliminar la cabaña');
        }
    };

    return (
        <>
            <NavBar />
            <SideBar />

            <div className='contenedor-eliminar-cabaña'>
                <h3 className='titulo-eliminar-cabaña'>Eliminar cabaña</h3>

                <div className='contenedor-advertencia-delete-cabana'>
                    <p className='mensaje-advertencia-delete-cabana'>ATENCIÓN !! <br />Estás por eliminar de la Base de Datos la cabaña {`"${cabaña.name}"`}</p>
                    
                </div>
                <button className='boton-delete-cabana' onClick={handleDeleteCabana}>Eliminar cabaña</button>

                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

            <Footer />
        </>
    )
}

export default DeleteCabana;