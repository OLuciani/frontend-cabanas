import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import "./ListadoReservas.css";

const ListadoReservas = () => {
  const info = useContext(Context);

  const [listado, setListado] = useState([]);

 useEffect(() => {
   if(info){
     setListado([...info.listadoDeReservas].reverse());
   }
 }, [info])
 

  useEffect(() => {
    console.log('ListadoDeReservas - listadoDeReservas:', info.listadoDeReservas);
  }, [info.listadoDeReservas]);


  if (info.listadoDeReservas.length < 1) {
    return <p>Cargando...</p> 
  }

  
  
  return (
    <>
        <NavBar />
        <SideBar />

        <div className='contenedor-general-listado-reservas'>

            <h3 className='titulo-listado-reservas'>Listado de reservas</h3>

            <div className="contenedor-listado-reservas">
                {
                listado.length < 1 ? (
                    <p className="cargando-imagenes-listado-reservas">No hay reservas para mostrar...</p>
                ) : (
                    
                    listado.map((reserva) => (
                    <Link to={`/detailsReservar/${reserva._id}`} key={reserva._id}>
                    <div className="contenedor-una-reserva">
                        <article>
                        <p><b>Nombre del cliente:</b> {reserva.nombre}</p>
                        <p><b>Apellido del cliente:</b> {reserva.apellido}</p>
                        <p><b>Cabaña reservada:</b> {reserva.nombre_cabaña}</p>
                        <p><b>Email:</b> {reserva.email}</p>
                        <p><b>Fecha en que se reservó:</b> {reserva.fecha_reserva}</p>
                        <p><b>Cantidad de días reservados:</b> {reserva.cantidad_días}</p>
                        <p><b>Fecha de entrada:</b> {reserva.fecha_entrada}</p>
                        <p><b>Fecha de salida:</b> {reserva.fecha_salida}</p>
                        </article>
                    </div>
                    </Link>
                    ))
                )}
            </div>
        </div>

      <Footer />
    </>
  )
}

export default ListadoReservas;