/* import React from 'react';
import "./UpdateReservar.css";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UpdateReservar = () => {
    const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, reset } = useForm();

  const { _id } = useParams();
  const reserva = information.listadoDeReservas.find((unaReserva) => unaReserva._id === _id);

  const updateDates = async () => {
    await fetch(`http://localhost:5005/reservation_update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }
    })
  return (
    <>
        <h3>Editar Reserva</h3>

        <div className="contenedor-formulario-reservar">
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre")} placeholder={reserva.nombre} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Apellido:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("apellido")} placeholder={reserva.apellido} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Email:</label>
                  <br />
                  <input className="campo-input-reservar" type="email" {...register("email")} placeholder={reserva.email} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre de la Cabaña:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre_cabaña")} placeholder={reserva.nombre_cabaña} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha en que se hizo la reserva:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_reserva")} placeholder={reserva.fecha_reserva} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Cantidad de días reservados:</label>
                  <br />
                  <input className="campo-input-reservar" type="number" {...register("cantidad_días")} placeholder={reserva.cantidad_días} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de entrada:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_entrada")} placeholder={reserva.fecha_entrada} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de salida:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_salida")} placeholder={reserva.fecha_salida} />
                </div>

                <br />

                <button className="boton-confirmar-reserva" type="submit" onClick={updateDates}>Editar Reserva</button>
              </form>
            </div>
    </>
  )
}

export default UpdateReservar; */


/* import React, { useContext, useEffect, useRef } from 'react';
import "./UpdateReservar.css";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useForm } from "react-hook-form";
import axios from "axios";

const UpdateReservar = () => {
  const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, setValue } = useForm();

  const { _id } = useParams();

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reserva = information.listadoDeReservas.find((unaReserva) => unaReserva._id === _id);
    // Llenar los campos con los valores de la reserva actual
    setValue("nombre", reserva.nombre);
    setValue("apellido", reserva.apellido);
    setValue("email", reserva.email);
    setValue("nombre_cabaña", reserva.nombre_cabaña);
    setValue("fecha_reserva", reserva.fecha_reserva);
    setValue("cantidad_días", reserva.cantidad_días);
    setValue("fecha_entrada", reserva.fecha_entrada);
    setValue("fecha_salida", reserva.fecha_salida);
  }, [information.listadoDeReservas, _id, setValue]); // El segundo argumento vacío asegura que este efecto se ejecute solo una vez después del montaje

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://localhost:5005/api/reservation_update/${_id}`, data);
      // Aquí puedes manejar la respuesta del backend si es necesario
      console.log("Respuesta del backend:", response.data);
      
      // Actualizar la lista de reservas en el context
      // eslint-disable-next-line 
      useEffect(() => { 
        //fetch('https://cabanas-backend.onrender.com/api/reservation_register')
          fetch('http://localhost:5005/api/reservation_register', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      })
          .then((res) => res.json())
          .then((todasLasReservas) => {
            information.setListadoDeReservas(todasLasReservas);
          })
          .catch((error) => console.log(error));
      }, []);
     // information.setListadoDeReservas(response.data.updatedReservations);
      // Redirecciono a ListadoReservas.js
      navigate("/listadoReservas");
    } catch (error) {
      // Manejar el error si la solicitud falla
      console.error("Error al actualizar la reserva:", error);
    }
  };


  return (
    <>
      <h3>Editar Reserva</h3>

      <div className="contenedor-formulario-reservar">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Apellido:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("apellido")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Email:</label>
                  <br />
                  <input className="campo-input-reservar" type="email" {...register("email")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre de la Cabaña:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre_cabaña")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha en que se hizo la reserva:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_reserva")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Cantidad de días reservados:</label>
                  <br />
                  <input className="campo-input-reservar" type="number" {...register("cantidad_días")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de entrada:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_entrada")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de salida:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_salida")} />
                </div>

          <br />

          <button className="boton-confirmar-reserva" type="submit" onClick={handleSubmit(onSubmit)}>Editar Reserva</button>

        </form>
      </div>
    </>
  );
};

export default UpdateReservar; */


import React, { useContext, useEffect, useRef } from 'react';
import "./UpdateReservar.css";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useForm } from "react-hook-form";
import axios from "axios";

const UpdateReservar = () => {
  const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, setValue } = useForm();

  const { _id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const reserva = information.listadoDeReservas.find((unaReserva) => unaReserva._id === _id);
    // Llenar los campos con los valores de la reserva actual
    setValue("nombre", reserva.nombre);
    setValue("apellido", reserva.apellido);
    setValue("email", reserva.email);
    setValue("nombre_cabaña", reserva.nombre_cabaña);
    setValue("fecha_reserva", reserva.fecha_reserva);
    setValue("cantidad_días", reserva.cantidad_días);
    setValue("fecha_entrada", reserva.fecha_entrada);
    setValue("fecha_salida", reserva.fecha_salida);
  }, [information.listadoDeReservas, _id, setValue]);

  const updateListadoDeReservas = async () => {
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
      information.setListadoDeReservas(todasLasReservas);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      //const response = await axios.put(`http://localhost:5005/api/reservation_update/${_id}`, data);  
      const response = await axios.put(`https://cabanas-backend.onrender.com/api/reservation_update/${_id}`, data);
      console.log("Respuesta del backend:", response.data);

      // Actualizar la lista de reservas en el contexto
      updateListadoDeReservas();

      // Redireccionar a ListadoReservas.js
      navigate("/listadoReservas");
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
    }
  };

  
  return (
    <>
      <h3 className='titulo-update-reservar'>Editar Reserva</h3>

      <div className="contenedor-formulario-reservar">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Apellido:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("apellido")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Email:</label>
                  <br />
                  <input className="campo-input-reservar" type="email" {...register("email")} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre de la Cabaña:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre_cabaña")} readOnly />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha en que se hizo la reserva:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_reserva")} readOnly />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Cantidad de días reservados:</label>
                  <br />
                  <input className="campo-input-reservar" type="number" {...register("cantidad_días")} readOnly />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de entrada:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_entrada")} readOnly />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Fecha de salida:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("fecha_salida")}readOnly />
                </div>

          <br />

          <button className="boton-confirmar-reserva" type="submit" onClick={handleSubmit(onSubmit)}>Editar Reserva</button>

        </form>
      </div>
    </>
  );
};

export default UpdateReservar;