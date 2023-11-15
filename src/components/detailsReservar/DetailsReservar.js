import React, { useContext } from 'react';
import { Context } from "../context/Context";
import "./DetailsReservar.css";
import { Link, useParams } from "react-router-dom";

const DetailsReservar = () => {
    const information = useContext(Context);

    const { _id } = useParams();
    const reserva = information.listadoDeReservas.find((unaReserva) => unaReserva._id === _id);

  return (
    <>
        <h3 className='titulo-details-reservar'>Detalles de la reserva del cliente: {reserva.nombre} {reserva.apellido}</h3>

        <div className="contenedor-reserva">
            <article className='article-reservar'>
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

        <div className="contenedor-botones-admin">
            <div className="botones-admin">
                <Link to={`/updateReservar/${reserva._id}`}>
                <button className="boton-editar">Editar reserva</button>
                </Link>

                <Link to={`/deleteReserva/${reserva._id}`}>
                <button className="boton-eliminar">Eliminar reserva</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default DetailsReservar;