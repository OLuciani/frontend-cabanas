import React, { useState, useEffect, useRef} from 'react';
import Calendar from 'react-calendar';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import "./VerFechas.css";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../context/Context";
import Footer from '../footer/Footer';


const VerFechas = () => { 
    const informacion = useContext(Context);

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const doubleCalendar = () => windowSize >= 768;

    const [value, onChange] = useState(new Date());
    const [nuevasReservas, setNuevasReservas] = useState([]);
    const [initialDate, setInitialDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fechasReservas, setFechasReservas] = useState([]);
    //const [fechasRepetidas, setFechasRepetidas] = useState([]);
    const [mostrarBotonReservar, setMostrarBotonReservar] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);
    const [checkOut, setCheckOut] = useState(null);
    const [fechasQueReservaste, setFechasQueReservaste] = useState("");
    

    const { _id } = useParams();
    let cabaña = informacion.data.find((cab) => cab._id === _id);

    const date_1 = new Date(value[0]);
    const date_2 = new Date(value[1]);

    const onSaveDates = () => {
        setInitialDate(new Date(value[0]).getDate());
        setEndDate(new Date(value[1]).getDate());

        const totalDays = (date_1, date_2) => {
            const difference = date_1.getTime() - date_2.getTime();
            const days = Math.ceil((difference / (1000 * 3600 * 24)) * -1);
            return days;
        }

        const td = totalDays(date_1, date_2);
        //console.log(td);

        setFechasReservas(cabaña.available_days);

        let tdFechas = [];

        for (let i = 0; i < td; i++) {
            const date = new Date(value[0]);
            date.setDate(date.getDate() + i);
            tdFechas.push(date.toDateString());
        }

        //console.log(...tdFechas);

        let nuevasReservas = tdFechas.filter(fecha => !fechasReservas.includes(fecha));
        setNuevasReservas(nuevasReservas);
        //console.log(nuevasReservas);

        //console.log(cabaña.available_days);

        const fechasRepetidas = nuevasReservas.filter(fecha => cabaña.available_days.includes(fecha));
        //setFechasRepetidas(fechasRepetidas);

        //console.log(fechasRepetidas); 

        if (fechasRepetidas.length === 0) {
            setMostrarBotonReservar(true);
            setMostrarError(false);
        } else {
            setMostrarBotonReservar(false);
            setMostrarError(true);
        } 

        const calculatedCheckOut = new Date(date_2.getTime() + 24 * 60 * 60 * 1000);
        setCheckOut(calculatedCheckOut);
        //console.log(checkOut);

    };
 
     

    const reservarDates = async (e) => {
        if (initialDate.toLocaleString() === endDate.toLocaleString()) {
            await fetch(`http://localhost:5005/cabanas/update/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    available_days:
                        new Date(value[0]).toDateString() === "Invalid Date"
                            ? [...cabaña.available_days, new Date(value).toDateString()]
                            : [...cabaña.available_days, new Date(value[0]).toDateString()]
                })
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        await fetch(`https://cabanas-backend.onrender.com/cabanas/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                available_days: [...fechasReservas, ...nuevasReservas]
            })
        }).then((res) => res.json())
            .then((data) => {
                //console.log(`DEVOLUCIONNNNN ${}`) 
            })
            .catch((err) => {
                console.log(err);
            });

            setFechasQueReservaste(`RESERVA EXITOSA. Has reservado la ${cabaña.name} por ${nuevasReservas.length} días: desde las 10 hs del ${date_1.toLocaleDateString()} hasta las 10 hs del ${checkOut.toLocaleDateString()}.`);

            console.log(fechasQueReservaste);
    };

    let disabledDates = cabaña.available_days.map((oneDate) => {
        return new Date(oneDate);
    });

    const desactivarFechasReservadas = ({ date, view }) =>
        (view === 'month') &&
        disabledDates.some(disabledDate =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate()
        );

        //console.log(nuevasReservas);  

        const containerRef = useRef(null);

        useEffect(() => {
            if (containerRef.current && fechasQueReservaste) {
              containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, [fechasQueReservaste]);

    return (
        <>
            <NavBar />
            <SideBar />

            <div className='box-consultar-fechas'>

                <h2 className='titulo-consultar-fechas'>Consultar fechas {cabaña.name}</h2>

                <div className='contenedor-calendario'>
                    <Calendar className="calendario" tileDisabled={desactivarFechasReservadas} returnValue='range' selectRange onChange={onChange} minDate={new Date()} showDoubleView={doubleCalendar()} />

                    <div className='contenedor-importante'>
                        <p className='titulo-importante'>IMPORTANTE !!</p>
                        <p className='texto-importante'>Para reservar un solo día clieckear 2 veces el día elegido.<br />Para reservar dos o más días clickear primero el día de inicio de la reserva y luego el último día a reservar.</p>
                    </div>

                    {new Date(value[0]).toString() !== "Invalid Date" && (
                        <div className='Contenedor-días-seleccionados'>
                            <p className='días-seleccionados'>
                                <strong>Los días seleccionados son: </strong>
                            </p>

                            <span className='span-desde-hasta'>Desde: </span><span>{new Date(value[0]).toLocaleDateString()}</span>

                            <span className='span-desde-hasta'>Hasta: </span><span>{new Date(value[1]).toLocaleDateString()}</span>
                        </div>
                    )}

                    
                    
                    {date_1  & date_2 ? <button className='button-ver-fechas' location='reload' onClick={onSaveDates}>Verificar fechas</button>: null}

                    <div ref={containerRef}>
                        {mostrarError ? (
                            <p className='error-fechas-repetidas'>Vuelve a elegir fechas, hay fechas reservadas intercaladas.</p>
                        ) : (
                            mostrarBotonReservar && checkOut && (
                                <>
                                    <p className='message-días-a-reservar'>Los días a reservar son {nuevasReservas.length}: <br />desde las 10 hs del {date_1.toLocaleDateString()} hasta las 10 hs del {checkOut.toLocaleDateString()}.</p>
                                    
                                    <button className='button-ver-fechas' location='reload' onClick={reservarDates}>RESERVAR</button>

                                    <div className='contenedor-mesagge-fechas-que-reservaste'>
                                        <p className='mesagge-fechas-que-reservaste'>{fechasQueReservaste}</p>
                                    </div>
                                </>
                            )
                                
                        )}
                    </div>
                </div>
            </div>

            <footer className="">
                <Footer />
            </footer>
    
        </>
    )

}

export default VerFechas; 