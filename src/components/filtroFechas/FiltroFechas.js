/* import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);
  console.log(inf.startDate);
  console.log(inf.endDate);

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
  let fechasEnComun = [];

  const [startDateFocused, setStartDateFocused] = useState(false);
  const [endDateFocused, setEndDateFocused] = useState(false);
  const containerRef = useRef(null); // Referencia al elemento contenedor

  const handleStartDateBlur = (e) => {
    inf.setStartDate(e.target.value);
    setStartDateFocused(true);
  };

  const handleEndDateChange = (e) => {
    inf.setEndDate(e.target.value);
    setEndDateFocused(true);
  };

  useEffect(() => {
    if (containerRef.current && startDateFocused && inf.startDate && inf.endDate) {
      // Scroll al elemento contenedor cuando startDate tiene algún valor
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [startDateFocused, inf.startDate, inf.endDate]);

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={handleStartDateBlur}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={handleEndDateChange}
            onFocus={() => setEndDateFocused(false)}
            min={
              fechaDesde
                ? fechaDesde.toFormat('yyyy-MM-dd')
                : "dd/mm/aaaa"
            }
            max={fechaActual.plus({ days: 30 }).toFormat('yyyy-MM-dd')}
          />
        </div>
      </div>
    

      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate !== '' ? (
          <>
            <hr />
            
            <h3 className='titulo-las-cabañas-disponibles'>
              Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al{' '}
              {fechaHasta.toFormat('dd/MM/yyyy')}:
            </h3>
          </>
        ) : (
          ''
        )}
        <div className='contenedor-chequear-cabañas'>
          {inf.startDate &&
            inf.endDate !== '' &&
            todasLasCabañas.map((cabaña, index) => {
              fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));

              if (fechasEnComun.length < 1) {
                return (
                  <>
                    <div className='contenedor-filtro-cabañas'>
                      <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                      <article key={index}>
                        <Link to={`/detallesCabana/${cabaña._id}`}>
                          <div className='box-filtro-cabaña'>
                            <div className='cont-image-cabaña1'>
                              <img
                                className='image-filtro-cabañas'
                                src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                                alt={`Imagen ${cabaña.name}`}
                              />
                            </div>

                            <div className='cont-image-filtro-cabaña2'>
                              {cabaña.url_images.map((image, index) => {
                                if (index > 0 && index <= 4) {
                                  return (
                                    <div className='div-images-filtro-cabaña' key={index}>
                                      <img
                                        className='images-filtro-cabaña'
                                        src={`https://cabanas-backend.onrender.com/${image}`}
                                        alt={`Imagen ${image}`}
                                      />
                                    </div>
                                  );
                                }

                                return null;
                              })}
                            </div>
                          </div>
                        </Link>
                      </article>
                      <p className='cartel-mas-3'>+3</p>
                    </div>
                  </>
                );
              }

              return null;
            })}
        </div>
        {fechasEnComun.length > 0 ? <p className='mensaje-no-fechas-disponibles'>EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES<br /><span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span><br /><Link to="/cabanas"><button className='boton-cabañas-filtro-fechas'>Cabañas</button></Link></p> : ''}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>

    </>
  );
};

export default FiltroFechas;
 */



import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);
  console.log(inf.startDate);
  console.log(inf.endDate);

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
  let fechasEnComun = [];

  const [startDateFocused, setStartDateFocused] = useState(false);
  const containerRef = useRef(null); // Referencia al elemento contenedor

  const handleStartDateBlur = (e) => {
    inf.setStartDate(e.target.value);
    setStartDateFocused(true);
  };

  const handleEndDateChange = (e) => {
    inf.setEndDate(e.target.value);
  };

  useEffect(() => {
    if (containerRef.current && startDateFocused && inf.startDate && inf.endDate) {
      // Scroll al elemento contenedor cuando startDate tiene algún valor
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [startDateFocused, inf.startDate, inf.endDate]);

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={handleStartDateBlur}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={handleEndDateChange}
            onFocus={() => setStartDateFocused(false)}
            min={
              fechaDesde
                ? fechaDesde.toFormat('yyyy-MM-dd')
                : "dd/mm/aaaa"
            }
            max={fechaActual.plus({ days: 30 }).toFormat('yyyy-MM-dd')}
          />
        </div>
      </div>


      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate !== '' ? (
          <>
            <hr />

            <h3 className='titulo-las-cabañas-disponibles'>
              Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al{' '}
              {fechaHasta.toFormat('dd/MM/yyyy')}:
            </h3>
          </>
        ) : (
          ''
        )}
        <div className='contenedor-chequear-cabañas'>
          {inf.startDate &&
            inf.endDate !== '' &&
            todasLasCabañas.map((cabaña, index) => {
              fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));

              if (fechasEnComun.length < 1) {
                return (
                  <>
                    <div className='contenedor-filtro-cabañas'>
                      <h3 className='name-filtro-cabaña'>{cabaña.name}</h3>
                      <article key={index}>
                        <Link to={`/detallesCabana/${cabaña._id}`}>
                          <div className='box-filtro-cabaña'>
                            <div className='cont-image-cabaña1'>
                              <img
                                className='image-filtro-cabañas'
                                src={`https://cabanas-backend.onrender.com/${cabaña.url_image}`}
                                alt={`Imagen ${cabaña.name}`}
                              />
                            </div>

                            <div className='cont-image-filtro-cabaña2'>
                              {cabaña.url_images.map((image, index) => {
                                if (index > 0 && index <= 4) {
                                  return (
                                    <div className='div-images-filtro-cabaña' key={index}>
                                      <img
                                        className='images-filtro-cabaña'
                                        src={`https://cabanas-backend.onrender.com/${image}`}
                                        alt={`Imagen ${image}`}
                                      />
                                    </div>
                                  );
                                }

                                return null;
                              })}
                            </div>
                          </div>
                        </Link>
                      </article>
                      <p className='cartel-mas-3'>+3</p>
                    </div>
                  </>
                );
              }

              return null;
            })}
        </div>
        {fechasEnComun.length > 0 ? <p className='mensaje-no-fechas-disponibles'>EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES<br /><span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span><br /><Link to="/cabanas"><button className='boton-cabañas-filtro-fechas'>Cabañas</button></Link></p> : ''}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>

    </>
  );
};

export default FiltroFechas;
