/* import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);

  const [tipoDeInputEntrada, setTipoDeInputEntrada] = useState("text");
  const [tipoDeInputSalida, setTipoDeInputSalida] = useState("text");

  const fechaActual = DateTime.local().startOf('day');

  let fechaDesde = inf.startDate ? DateTime.fromISO(inf.startDate) : null;
  let fechaHasta = inf.endDate ? DateTime.fromISO(inf.endDate) : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = fechaHasta.diff(fechaDesde, 'days').toObject().days; //Aque teneía al final + 1

    for (let i = 0; i < daysDiff; i++) {
      const date = fechaDesde.plus({ days: i });
      tdFechas.push(date.toJSDate().toDateString());
    }
  }

  //console.log(...tdFechas)

  let todasLasCabañas = inf.data;
  let cabañasDisponibles = todasLasCabañas.filter((cabaña) => {
    const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
    return fechasEnComun.length < 1;
  });


  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);
 
  //console.log(cabañasDisponibles);
  

  const onMouseOverEntrada = () => {
   return setTipoDeInputEntrada("date");
  }

  const onMouseOverSalida = () => {
    return setTipoDeInputSalida("date");
   }

  //console.log(tipoDeInputEntrada);
  //console.log(tipoDeInputSalida);

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>
        <div className='caja-date-picker'>
          <div className='box-date-picker'>
            <div className='one-calendar1'>
              <label className='label-desde'>Desde:</label>
              <input
                className='calendar'
                placeholder='Entrada'
                type={tipoDeInputEntrada}
                onBlur={(e) => inf.setStartDate(e.target.value)}
                min={fechaActual.toFormat('yyyy-MM-dd')}
                onMouseOver= {onMouseOverEntrada}
              />
            </div>

            <div className='one-calendar2'>
              <label className='label-hasta'>Hasta:</label>
              <input
                className='calendar c2'
                placeholder='Salida'
                type={tipoDeInputSalida}
                onChange={(e) => inf.setEndDate(e.target.value)}
                min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd') }
                max='9999-12-31'
                onMouseOver= {onMouseOverSalida}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate && (
          todasLasCabañas.length > 0 
           ? 
          <>
            {cabañasDisponibles.length > 0 ? (
              <>
                <hr />
                <h3 className='titulo-las-cabañas-disponibles'>
                  Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')}:
                </h3>

                <div className='contenedor-chequear-cabañas'>

                {cabañasDisponibles.map((cabaña) => (
                  <div className='contenedor-filtro-cabañas' key={cabaña._id}>
                    <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                    <article>
                      <Link to={`/detallesCabana/${cabaña._id}`}>
                        <div className='box-filtro-cabaña'>
                          <div className='cont-image-cabaña1'>
                            <img
                              className='image-filtro-cabañas'
                              src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                              alt={`Imagen ${cabaña.name}`}
                              loading='lazy' // Carga perezosa (lazy loading) para mejorar la carga inicial
                            />
                          </div>

                          <div className='cont-image-filtro-cabaña2'>
                            {cabaña.url_images.slice(1, 5).map((image, index) => (
                              <div className='div-images-filtro-cabaña' key={index}>
                                <img
                                  className='images-filtro-cabaña'
                                  src={`https://cabanas-backend.onrender.com/${image}`}
                                  alt={`Imagen ${image}`}
                                  loading='lazy' // Carga perezosa (lazy loading) para mejorar la carga inicial
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </article>
                    <p className='cartel-mas-3'>+3</p>
                  </div>
                ))}
                </div>
              </>
            ) : (
              <>
                <hr />

                <p className='mensaje-no-fechas-disponibles'>Del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')} NO HAY CABAÑAS DISPONIBLES</p>

                <br />

                <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                <br />
                <Link to='/cabanas'>
                  <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                </Link>
              </>
            )}
          </>
          : <p className='message-buscando-cabañas'>Buscando cabañas...</p>
        )}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas; */






/* import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);

  const [tipoDeInputEntrada, setTipoDeInputEntrada] = useState("text");
  const [tipoDeInputSalida, setTipoDeInputSalida] = useState("text");
  const [colorTextCalendar, setColorTextCalendar] = useState("");

  const fechaActual = DateTime.local().startOf('day');

  let fechaDesde = inf.startDate ? DateTime.fromISO(inf.startDate) : null;
  let fechaHasta = inf.endDate ? DateTime.fromISO(inf.endDate) : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = fechaHasta.diff(fechaDesde, 'days').toObject().days + 1;

    for (let i = 0; i < daysDiff; i++) {
      const date = fechaDesde.plus({ days: i });
      tdFechas.push(date.toJSDate().toDateString());
    }
  }

  let todasLasCabañas = inf.data;
  let cabañasDisponibles = todasLasCabañas.filter((cabaña) => {
    const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
    return fechasEnComun.length < 1;
  });


  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);
 
  //console.log(cabañasDisponibles);
  

  const onMouseOverEntrada = () => {
    if (tipoDeInputEntrada !== "date") {
      setTipoDeInputEntrada("date");
    }
  };

  const onMouseOverSalida = () => {
    if (tipoDeInputSalida !== "date") {
      setTipoDeInputSalida("date");
    }
  };

  //console.log(tipoDeInputEntrada);
  //console.log(tipoDeInputSalida);

  useEffect(() => {
    if (tipoDeInputEntrada === "date" && inf.startDate === "") {
      setColorTextCalendar("color-text-calendar1");
    } else {
      setColorTextCalendar("");
    }
  }, [tipoDeInputEntrada, inf.startDate]);

  console.log(colorTextCalendar)
  
  

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>
        <div className='caja-date-picker'>
          <div className='box-date-picker'>
            <div className='one-calendar1'>
              <label className='label-desde'>Desde:</label>
              <input
                className={`calendar ${colorTextCalendar}`}
                placeholder='Entrada'
                type={tipoDeInputEntrada}
                onBlur={(e) => inf.setStartDate(e.target.value)}
                min={fechaActual.toFormat('yyyy-MM-dd')}
                onMouseOver= {onMouseOverEntrada}
              />
            </div>

            <div className='one-calendar2'>
              <label className='label-hasta'>Hasta:</label>
              <input
                className='calendar c2'
                placeholder='Salida'
                type={tipoDeInputSalida}
                onChange={(e) => inf.setEndDate(e.target.value)}
                min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd') }
                max='9999-12-31'
                onMouseOver= {onMouseOverSalida}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate && (
          todasLasCabañas.length > 0 
           ? 
          <>
            {cabañasDisponibles.length > 0 ? (
              <>
                <hr />
                <h3 className='titulo-las-cabañas-disponibles'>
                  Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')}:
                </h3>

                <div className='contenedor-chequear-cabañas'>

                {cabañasDisponibles.map((cabaña) => (
                  <div className='contenedor-filtro-cabañas' key={cabaña._id}>
                    <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                    <article>
                      <Link to={`/detallesCabana/${cabaña._id}`}>
                        <div className='box-filtro-cabaña'>
                          <div className='cont-image-cabaña1'>
                            <img
                              className='image-filtro-cabañas'
                              src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                              alt={`Imagen ${cabaña.name}`}
                              loading='lazy' // Carga perezosa (lazy loading) para mejorar la carga inicial
                            />
                          </div>

                          <div className='cont-image-filtro-cabaña2'>
                            {cabaña.url_images.slice(1, 5).map((image, index) => (
                              <div className='div-images-filtro-cabaña' key={index}>
                                <img
                                  className='images-filtro-cabaña'
                                  src={`https://cabanas-backend.onrender.com/${image}`}
                                  alt={`Imagen ${image}`}
                                  loading='lazy' // Carga perezosa (lazy loading) para mejorar la carga inicial
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </article>
                    <p className='cartel-mas-3'>+3</p>
                  </div>
                ))}
                </div>
              </>
            ) : (
              <>
                <hr />

                <p className='mensaje-no-fechas-disponibles'>Del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')} NO HAY CABAÑAS DISPONIBLES</p>

                <br />

                <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                <br />
                <Link to='/cabanas'>
                  <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                </Link>
              </>
            )}
          </>
          : <p className='message-buscando-cabañas'>Buscando cabañas...</p>
        )}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas; */




/* 
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FiltroFechas.css';

const FiltroFechas = () => {
  const inf = useContext(Context);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fechaActual = DateTime.local().startOf('day');

  let fechaDesde = inf.startDate ? DateTime.fromISO(inf.startDate) : null;
  let fechaHasta = inf.endDate ? DateTime.fromISO(inf.endDate) : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = fechaHasta.diff(fechaDesde, 'days').toObject().days;

    for (let i = 0; i < daysDiff; i++) {
      const date = fechaDesde.plus({ days: i });
      tdFechas.push(date.toJSDate().toDateString());
    }
  }

  let todasLasCabañas = inf.data;
  let cabañasDisponibles = todasLasCabañas.filter((cabaña) => {
    const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
    return fechasEnComun.length < 1;
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    inf.setStartDate(date ? date.toISOString() : null);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    inf.setEndDate(date ? date.toISOString() : null);
  };

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>
        <div className='caja-date-picker'>
          <div className='box-date-picker'>
            <div className='one-calendar1'>
              <label className='label-desde'>Desde:</label>
              <DatePicker
                className='calendar'
                placeholderText='Entrada'
                selected={startDate}
                onChange={handleStartDateChange}
                minDate={fechaActual.toJSDate()}
                dateFormat='dd/MM/yyyy'
              />
            </div>

            <div className='one-calendar2'>
              <label className='label-hasta'>Hasta:</label>
              <DatePicker
                className='calendar c2'
                placeholderText='Salida'
                selected={endDate}
                onChange={handleEndDateChange}
                minDate={startDate || fechaActual.toJSDate()}
                maxDate={new Date(9999, 11, 31)}
                dateFormat='dd/MM/yyyy'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate && (
          todasLasCabañas.length > 0 ? (
            <>
              {cabañasDisponibles.length > 0 ? (
                <>
                  <hr />
                  <h3 className='titulo-las-cabañas-disponibles'>
                    Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')}:
                  </h3>

                  <div className='contenedor-chequear-cabañas'>
                    {cabañasDisponibles.map((cabaña) => (
                      <div className='contenedor-filtro-cabañas' key={cabaña._id}>
                        <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                        <article>
                          <Link to={`/detallesCabana/${cabaña._id}`}>
                            <div className='box-filtro-cabaña'>
                              <div className='cont-image-cabaña1'>
                                <img
                                  className='image-filtro-cabañas'
                                  src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                                  alt={`Imagen ${cabaña.name}`}
                                  loading='lazy'
                                />
                              </div>

                              <div className='cont-image-filtro-cabaña2'>
                                {cabaña.url_images.slice(1, 5).map((image, index) => (
                                  <div className='div-images-filtro-cabaña' key={index}>
                                    <img
                                      className='images-filtro-cabaña'
                                      src={`https://cabanas-backend.onrender.com/${image}`}
                                      alt={`Imagen ${image}`}
                                      loading='lazy'
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Link>
                        </article>
                        <p className='cartel-mas-3'>+3</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <hr />
                  <p className='mensaje-no-fechas-disponibles'>
                    Del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')} NO HAY CABAÑAS DISPONIBLES
                  </p>
                  <br />
                  <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                  <br />
                  <Link to='/cabanas'>
                    <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                  </Link>
                </>
              )}
            </>
          ) : (
            <p className='message-buscando-cabañas'>Buscando cabañas...</p>
          )
        )}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas; */





import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FiltroFechas.css';

const FiltroFechas = () => {
  const inf = useContext(Context);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fechaActual = DateTime.local().startOf('day');

  let fechaDesde = inf.startDate ? DateTime.fromISO(inf.startDate) : null;
  let fechaHasta = inf.endDate ? DateTime.fromISO(inf.endDate) : null;

  let tdFechas = [];

  if (fechaDesde && fechaHasta) {
    const daysDiff = fechaHasta.diff(fechaDesde, 'days').toObject().days;

    for (let i = 0; i < daysDiff; i++) {
      const date = fechaDesde.plus({ days: i });
      tdFechas.push(date.toJSDate().toDateString());
    }
  }

  let todasLasCabañas = inf.data;
  let cabañasDisponibles = todasLasCabañas.filter((cabaña) => {
    const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
    return fechasEnComun.length < 1;
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    inf.setStartDate(date ? date.toISOString() : null);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    inf.setEndDate(date ? date.toISOString() : null);
  };

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>
        <div className='caja-date-picker'>
          <div className='box-date-picker'>
            <div className='one-calendar1'>
              {inf.startDate !== '' && <label className='label-desde'>Entrada:</label>}
              <DatePicker
                className='calendar'
                placeholderText='Entrada'
                selected={startDate}
                onChange={handleStartDateChange}
                minDate={fechaActual.toJSDate()}
                dateFormat='dd/MM/yyyy'
              />
            </div>

            <div className='one-calendar2'>
              {inf.endDate !== '' && <label className='label-hasta'>Salida:</label>}
              <DatePicker
                className='calendar c2'
                placeholderText='Salida'
                selected={endDate}
                onChange={handleEndDateChange}
                minDate={startDate || fechaActual.toJSDate()}
                maxDate={new Date(9999, 11, 31)}
                dateFormat='dd/MM/yyyy'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate && (
          todasLasCabañas.length > 0 ? (
            <>
              {cabañasDisponibles.length > 0 ? (
                <>
                  <hr />
                  <h3 className='titulo-las-cabañas-disponibles'>
                    Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')}:
                  </h3>

                  <div className='contenedor-chequear-cabañas'>
                    {cabañasDisponibles.map((cabaña) => (
                      <div className='contenedor-filtro-cabañas' key={cabaña._id}>
                        <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                        <article>
                          <Link to={`/detallesCabana/${cabaña._id}`}>
                            <div className='box-filtro-cabaña'>
                              <div className='cont-image-cabaña1'>
                                <img
                                  className='image-filtro-cabañas'
                                  src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                                  alt={`Imagen ${cabaña.name}`}
                                  loading='lazy'
                                />
                              </div>

                              <div className='cont-image-filtro-cabaña2'>
                                {cabaña.url_images.slice(1, 5).map((image, index) => (
                                  <div className='div-images-filtro-cabaña' key={index}>
                                    <img
                                      className='images-filtro-cabaña'
                                      src={`https://cabanas-backend.onrender.com/${image}`}
                                      alt={`Imagen ${image}`}
                                      loading='lazy'
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Link>
                        </article>
                        <p className='cartel-mas-3'>+3</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <hr />
                  <p className='mensaje-no-fechas-disponibles'>
                    Del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')} NO HAY CABAÑAS DISPONIBLES
                  </p>
                  <br />
                  <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                  <br />
                  <Link to='/cabanas'>
                    <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                  </Link>
                </>
              )}
            </>
          ) : (
            <p className='message-buscando-cabañas'>Buscando cabañas...</p>
          )
        )}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas;