//Este codigo anda perfecto. Envia un solo mail
/* import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import { DateTime } from "luxon";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import Footer from "../footer/Footer";
import "../reservar/Reservar.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import EnviarMail from "../enviarEmail/EnviarEmail";

const Reservar = () => {
  const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, reset } = useForm();

  const [todasLasFechas, setTodasLasFechas] = useState([]);
  const [bandera, setBandera] = useState(false);
  const [fechasQueReservaste, setFechasQueReservaste] = useState("");
  const [encabezadoDiasAReservar, setEncabezadoDiasAReservar] = useState("");
  const [díasAReservar, setDíasAReservar] = useState("");
  const [ocultar, setOcultar] = useState(false);
  const [formulario, setFormulario] = useState("");
  const [mensajeMailEnviado, setMailEnviado] = useState("");
  const [emailData, setEmailData] = useState({
    to: '', // Agrega esta propiedad al estado
    subject: '',
    content: ''
  });

  const { _id } = useParams();
  const cabaña = information.data.find((cab) => cab._id === _id);

  const fechaDesde = information.startDate
    ? DateTime.fromISO(information.startDate).toJSDate()
    : null;
  const fechaHasta = information.endDate
    ? DateTime.fromISO(information.endDate).toJSDate()
    : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = Math.floor(
      (fechaHasta - fechaDesde) / (1000 * 60 * 60 * 24)
    );

    for (let i = 0; i < daysDiff; i++) {
      const date = new Date(fechaDesde.getTime() + i * (1000 * 60 * 60 * 24));
      tdFechas.push(date.toDateString());
    }
  }

  const handleConfirmarFechas = () => {
    setEncabezadoDiasAReservar("Días a reservar: ");
    setDíasAReservar(
      `${tdFechas.length} días y ${
        tdFechas.length
      } noches, desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()} en la ${
        cabaña.name
      }.`
    );

    setFormulario("Formulario para reservar");

    setTodasLasFechas(tdFechas);

    setBandera(true);

    setOcultar(true);
  };

  const reservarDates = async () => {
    await fetch(`https://cabanas-backend.onrender.com/cabanas/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        available_days: [...cabaña.available_days, ...todasLasFechas],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(`DEVOLUCIONNNNN ${}`)
      })
      .catch((err) => {
        console.log(err);
      });

    setFechasQueReservaste(
      `RESERVA EXITOSA. Has reservado la ${cabaña.name} por ${
        tdFechas.length
      } días y ${
        tdFechas.length
      } noches: desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()}.`
    );

    setBandera(false); // Oculta el formulario

    enviarCorreo();

    setMailEnviado(
      "Se envió un mail a tu correo electrónico con los detalles de la reserva."
    );
  };

  const enviarCorreo = async () => {
    if (emailData.to  && fechasQueReservaste) {
      setEmailData({
        to: emailData.to,
        subject: 'Reserva en Hernandez-Cabañas',
        content: fechasQueReservaste
      });

      try {
        const response = await axios.post('http://localhost:5005/api/send_mail', emailData);
        console.log('Correo electrónico enviado:', response.data);
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5005/api/reservation_register", data);

      console.log(response.data); // Puedes manejar la respuesta como desees
      console.log("Se enviaron los datos del cliente a la Base de Datos");
      // Limpiar los campos después del envío exitoso
      reset();
      reservarDates();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setEmailData({ ...emailData, [event.target.name]: event.target.value });
  };

  if (!cabaña) {
    // Manejar el caso cuando cabaña no tiene un valor válido
    return null;
  }

  const fechaActual = DateTime.local().toLocaleString(DateTime.DATE_SHORT);

  return (
    <>
      <NavBar />
      <SideBar />

      <div className="contenedor-reservar">
        <h3 className="titulo-reservar">Reservar {cabaña.name}</h3>

        <div>
          <img
            className="image-reservar"
            src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
            alt={`Imagen ${cabaña.name}`}
            loading="lazy"
          />
        </div>

        <div
          className={`${ocultar ? "ocultar" : null} conteneror-fechas-boton`}
        >
          <div className="contenedor-entrada-salida">
            <p className="fecha-reserva">
              <b>ENTRADA:</b> 10 hs del {fechaDesde?.toLocaleDateString()}
            </p>
            <p className="fecha-reserva">
              <b>SALIDA:</b> 10 hs del {fechaHasta?.toLocaleDateString()}
            </p>
          </div>

          <div>
            <button
              onClick={handleConfirmarFechas}
              className="boton-confirmar-fechas"
            >
              Confirmar fechas
            </button>
          </div>
        </div>

        <div className={`contenedor-dias-a-reservar ${bandera ? null : "ocultar-formulario-reservar"}`}>
          <p className="dias-a-reservar">
            <b>{encabezadoDiasAReservar}</b>
            {díasAReservar}
          </p>

          <p className="formulario-reserva">{formulario}</p>

          {bandera && (
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
                  <input className="campo-input-reservar" type="email" name="to" value={emailData.to} onChange={handleInputChange} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("nombre_cabaña")} value={cabaña.name} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_reserva")} value={fechaActual} />
                </div>

                <div>
                  <input className="ocultar-input" type="number" {...register("cantidad_días")} value={tdFechas.length} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_entrada")} value={fechaDesde?.toLocaleDateString()} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_salida")} value={fechaHasta?.toLocaleDateString()} />
                </div>

                <br />

                <button className="boton-confirmar-reserva" type="submit" onClick={reservarDates}>Reservar</button>
              </form>
            </div>
          )}
        </div>

        <div className={`contenedor-mesagge-fechas-q-reservaste ${bandera ? "ocultar-formulario-reservar" : null}`}>
          <p className="mesagge-fechas-q-reservaste">{fechasQueReservaste}</p>
        </div>

        <EnviarMail mensaje={fechasQueReservaste} correo={emailData.to} />
        <p className="mesagge-fechas-q-reservaste">{mensajeMailEnviado}</p>

      </div>

      <Footer />
    </>
  );
};

export default Reservar; */


import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import { DateTime } from "luxon";
import "../reservar/Reservar.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import EnviarMail from "../enviarEmail/EnviarEmail";

const Reservar = () => {
  const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, reset } = useForm();

  const [todasLasFechas, setTodasLasFechas] = useState([]);
  const [bandera, setBandera] = useState(false);
  const [fechasQueReservaste, setFechasQueReservaste] = useState("");
  const [encabezadoDiasAReservar, setEncabezadoDiasAReservar] = useState("");
  const [díasAReservar, setDíasAReservar] = useState("");
  const [ocultar, setOcultar] = useState(false);
  const [formulario, setFormulario] = useState("");
  const [mailEnviado, setMailEnviado] = useState(false);
  const [mensajeMailEnviado, setMensajeMailEnviado] = useState("");
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    content: ''
  });
  const [nombreUsuario, setNombreUsuario] = useState(""); // Nuevo estado para el nombre del usuario

  const { _id } = useParams();
  const cabaña = information.data.find((cab) => cab._id === _id);

  const fechaDesde = information.startDate
    ? DateTime.fromISO(information.startDate).toJSDate()
    : null;
  const fechaHasta = information.endDate
    ? DateTime.fromISO(information.endDate).toJSDate()
    : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = Math.floor(
      (fechaHasta - fechaDesde) / (1000 * 60 * 60 * 24)
    );

    for (let i = 0; i < daysDiff; i++) {
      const date = new Date(fechaDesde.getTime() + i * (1000 * 60 * 60 * 24));
      tdFechas.push(date.toDateString());
    }
  }

  const handleConfirmarFechas = () => {
    setEncabezadoDiasAReservar("Días a reservar: ");
    setDíasAReservar(
      `${tdFechas.length} días y ${
        tdFechas.length
      } noches, desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()} en la ${
        cabaña.name
      }.`
    );

    setFormulario("Formulario para reservar");

    setTodasLasFechas(tdFechas);

    setBandera(true);

    setOcultar(true);
  };

  const reservarDates = async () => {
    await fetch(`https://cabanas-backend.onrender.com/cabanas/update/${_id}`, {
    /* await fetch(`http://localhost:5005/cabanas/update/${_id}`, { */
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        available_days: [...cabaña.available_days, ...todasLasFechas],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("reservarDates - Respuesta:", data);
      })
      .catch((err) => {
        console.log("reservarDates - Error:", err);
      });

    setFechasQueReservaste(
      `RESERVA EXITOSA !! ${nombreUsuario}, has reservado la ${cabaña.name} por ${
        tdFechas.length
      } días y ${
        tdFechas.length
      } noches: desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()}.`
    );

    setBandera(false); // Oculta el formulario

    enviarCorreo();

    setMensajeMailEnviado(
      "Se envió un mail a tu correo electrónico con los detalles de la reserva."
    );
    setMailEnviado(true);

    information.setStartDate("");
    information.setEndDate("");
  };

  const enviarCorreo = async () => {
    if (emailData.to  && fechasQueReservaste) {
      setEmailData({
        to: emailData.to,
        subject: 'Reserva en Hernandez-Cabañas',
        content: fechasQueReservaste
      });

      try {
        //const response = await axios.post('http://localhost:5005/api/send_mail', emailData); 
        const response = await axios.post('https://cabanas-backend.onrender.com/api/send_mail', emailData);
        console.log('Correo electrónico enviado:', response.data);
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      //const response = await axios.post("http://localhost:5005/api/reservation_register", data); 
      const response = await axios.post("https://cabanas-backend.onrender.com/api/reservation_register", data);
      console.log(response.data); 
      console.log("Se enviaron los datos del cliente a la Base de Datos");
      // Limpiar los campos después del envío exitoso
      reset();
      reservarDates();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setEmailData({ ...emailData, [event.target.name]: event.target.value });
  };

  const handleNombreInputChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  if (!cabaña) {
    // Manejar el caso cuando cabaña no tiene un valor válido
    return null;
  }

  const fechaActual = DateTime.local().toLocaleString(DateTime.DATE_SHORT);

  //console.log("Nombre del usuario:", nombreUsuario);

  return (
    <> 
      <div className="contenedor-reservar">
        <h3 className="titulo-reservar">Reservar {cabaña.name}</h3>

        <div>
          <img
            className="image-reservar"
            /* src={`http://localhost:5005/${cabaña.url_image}`} */     
            src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
            alt={`Imagen ${cabaña.name}`}
            loading="lazy"
          />
        </div>

        <div
          className={`${ocultar ? "ocultar" : null} conteneror-fechas-boton`}
        >
          <div className="contenedor-entrada-salida">
            <p className="fecha-reserva">
              <b>ENTRADA:</b> 10 hs del {fechaDesde?.toLocaleDateString()}
            </p>
            <p className="fecha-reserva">
              <b>SALIDA:</b> 10 hs del {fechaHasta?.toLocaleDateString()}
            </p>
          </div>

          <div>
            <button
              onClick={handleConfirmarFechas}
              className="boton-confirmar-fechas"
            >
              Confirmar fechas
            </button>
          </div>
        </div>

        <div className={`contenedor-dias-a-reservar ${bandera ? null : "ocultar-formulario-reservar"}`}>
          <p className="dias-a-reservar">
            <b>{encabezadoDiasAReservar}</b>
            {díasAReservar}
          </p>

          <p className="formulario-reserva">{formulario}</p>

          {bandera && (
            <div className="contenedor-formulario-reservar">
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Nombre:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("nombre", { required: true })} onChange={handleNombreInputChange} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Apellido:</label>
                  <br />
                  <input className="campo-input-reservar" type="text" {...register("apellido", { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                  <label className="label-input-reservar">Email:</label>
                  <br />
                  <input className="campo-input-reservar" type="email" name="to" value={emailData.to} onChange={handleInputChange} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("nombre_cabaña")} value={cabaña.name} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_reserva")} value={fechaActual} />
                </div>

                <div>
                  <input className="ocultar-input" type="number" {...register("cantidad_días")} value={tdFechas.length} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_entrada")} value={fechaDesde?.toLocaleDateString()} />
                </div>

                <div>
                  <input className="ocultar-input" type="text" {...register("fecha_salida")} value={fechaHasta?.toLocaleDateString()} />
                </div>

                <br />

                <button className="boton-confirmar-reserva" type="submit" onClick={reservarDates}>Reservar</button>
              </form>
            </div>
          )}
        </div>

        <div className={`contenedor-mesagge-fechas-q-reservaste ${bandera ? "ocultar-formulario-reservar" : null}`}>
          <p className="mesagge-fechas-q-reservaste">{fechasQueReservaste}</p>
        </div>

        <EnviarMail mensaje={fechasQueReservaste} correo={emailData.to} />

        {
          mailEnviado && <p className="mesagge-mail-enviado">{mensajeMailEnviado}</p>
        }

      </div>
    </>
  );
};

export default Reservar;