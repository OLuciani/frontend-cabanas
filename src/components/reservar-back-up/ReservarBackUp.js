import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../context/Context";
import { useContext } from "react";
import { DateTime } from 'luxon';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';
import "../reservar/Reservar.css";

const Reservar = () => {
    let information = useContext(Context);

    const [todasLasFechas, setTodasLasFechas] = useState([]);
    const [bandera, setBandera] = useState(false);
    const [fechasQueReservaste, setFechasQueReservaste] = useState("");
    const [encabezadoDiasAReservar, setEncabezadoDiasAReservar] = useState("");
    const [díasAReservar, setDíasAReservar] = useState("");
    const [ocultar, setOcultar] = useState(false);
    

    const { _id } = useParams();
    let cabaña = information.data.find((cab) => cab._id === _id);

    if (!cabaña) {
        // Manejar el caso cuando cabaña no tiene un valor válido
        return null;
    } 

    let fechaDesde = information.startDate ? DateTime.fromISO(information.startDate).toJSDate() : null;
    let fechaHasta = information.endDate ? DateTime.fromISO(information.endDate).toJSDate() : null;

   

    let tdFechas = [];

    if (fechaDesde && fechaHasta) {
        const daysDiff = Math.floor((fechaHasta - fechaDesde) / (1000 * 60 * 60 * 24));

        for (let i = 0; i < daysDiff; i++) {
            const date = new Date(fechaDesde.getTime() + i * (1000 * 60 * 60 * 24));
            tdFechas.push(date.toDateString());
        }
    }

    //console.log(tdFechas);

    const handleConfirmarFechas = () => {
        setEncabezadoDiasAReservar("Días a reservar: ")
        setDíasAReservar(`${tdFechas.length} días y ${tdFechas.length} noches, desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()} en la ${cabaña.name}.`)

        setTodasLasFechas(tdFechas);

        setBandera(true);

        setOcultar(true);
    }

    let fechasReservas = [];
    cabaña.available_days.map((fecha) => 
        fechasReservas.push(fecha)
        //intenté crear y usar un estado para fechasReservas pero no funcionó. 
    )

    //console.log(todasLasFechas.length);
    //console.log(fechasReservas.length);

    const reservarDates = async (e) => {
        await fetch(`https://cabanas-backend.onrender.com/cabanas/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                available_days: [...fechasReservas, ...todasLasFechas]
            })})
            .then((res) => res.json())
            .then((data) => {
                //console.log(`DEVOLUCIONNNNN ${}`) 
            })
            .catch((err) => {
                console.log(err);
            });

            setFechasQueReservaste(`RESERVA EXITOSA. Has reservado la ${cabaña.name} por ${tdFechas.length} días y ${tdFechas.length} noches: desde las 10 hs del ${fechaDesde?.toLocaleDateString()} hasta las 10 hs del ${fechaHasta?.toLocaleDateString()}.`);
          
    };

    return (
        <>
            <NavBar />
            <SideBar />

            <div className='contenedor-reservar'>
                <h3 className='titulo-reservar'>Reservar {cabaña.name}</h3>

                <div>
                    <img
                        className='image-reservar'
                        src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                        alt={`Imagen ${cabaña.name}`}
                        loading='lazy'
                    />
                </div>

                <div className={`${(ocultar ? "ocultar" : null)} conteneror-fechas-boton`}>   
                    <div className='contenedor-entrada-salida'>
                        <p className='fecha-reserva'><b>ENTRADA:</b> 10 hs del {fechaDesde?.toLocaleDateString()}</p>
                        <p className='fecha-reserva'><b>SALIDA:</b> 10 hs del {fechaHasta?.toLocaleDateString()}</p>
                    </div> 

                    <div>
                        <button onClick={handleConfirmarFechas} className='boton-confirmar-fechas'>Confirmar fechas</button>  
                    </div>
                </div>

                <div className='contenedor-dias-a-reservar'>
                    <p className='dias-a-reservar'><b>{encabezadoDiasAReservar}</b>{díasAReservar}</p>
                </div>

                {
                    bandera
                        ? <button onClick={reservarDates} className='boton-confirmar-reserva'>Reservar</button>
                        : null
                }
                

                <div className='contenedor-mesagge-fechas-q-reservaste'>
                    <p className='mesagge-fechas-q-reservaste'>{fechasQueReservaste}</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Reservar;