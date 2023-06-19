/* import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);
  //console.log(inf.startDate);
  //console.log(inf.endDate);

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

  const containerRef = useRef(null); // Referencia al elemento contenedor

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      // Scroll suave al elemento contenedor cuando startDate y endDate tienen valores
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);

  let cabañasDisponibles = 0;

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={(e) => inf.setStartDate(e.target.value)}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={(e) => inf.setEndDate(e.target.value)}
            min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd')}
            max='9999-12-31'
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
          {inf.startDate && inf.endDate !== '' &&
            todasLasCabañas.map((cabaña) => {
              fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));

              if (fechasEnComun.length < 1) {
                cabañasDisponibles = cabañasDisponibles + 1;
                return (
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
                );
              }

              return null;
            })}
        </div>
        
        {inf.startDate && inf.endDate !== '' && cabañasDisponibles < 1 ? (
          <p className='mensaje-no-fechas-disponibles'>
            EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES<br />
            <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span><br />
            <Link to="/cabanas">
              <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
            </Link>
          </p>
        ) : (
          ''
        )}

        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas; */





/* import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);
  //console.log(inf.startDate);
  //console.log(inf.endDate);

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

  const containerRef = useRef(null); // Referencia al elemento contenedor

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      // Scroll suave al elemento contenedor cuando startDate y endDate tienen valores
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);

  let cabañasDisponibles = 0;

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={(e) => inf.setStartDate(e.target.value)}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={(e) => inf.setEndDate(e.target.value)}
            min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd')}
            max='9999-12-31'
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
          {inf.startDate && inf.endDate !== '' &&
            todasLasCabañas.map((cabaña) => {
              fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));

              if (fechasEnComun.length < 1) {
                cabañasDisponibles = cabañasDisponibles + 1;
                return (
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
                )
              }

              return null;
            })}
        </div>
        
        {inf.startDate && inf.endDate !== '' && cabañasDisponibles < 1 ? (
          <p className='mensaje-no-fechas-disponibles'>
            EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES<br />
            <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span><br />
            <Link to="/cabanas">
              <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
            </Link>
          </p>
        ) : (
          ''
        )}

        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas; */





/* import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  let inf = useContext(Context);

  const [cabañasDisponibles, setCabañasDisponibles] = useState([]);

  //console.log(inf.startDate);
  //console.log(inf.endDate);

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

  const containerRef = useRef(null); // Referencia al elemento contenedor

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      // Scroll suave al elemento contenedor cuando startDate y endDate tienen valores
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [inf.startDate, inf.endDate]);
  

  if (inf.startDate && inf.endDate !== '') {
    todasLasCabañas.forEach((cabaña) => {
      fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));

      if(fechasEnComun.length < 1) {
        setCabañasDisponibles(cabaña)
      }
    });
  } 
  

console.log(cabañasDisponibles.length);
    

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={(e) => inf.setStartDate(e.target.value)}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={(e) => inf.setEndDate(e.target.value)}
            min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd')}
            max='9999-12-31'
          />
        </div>
      </div>

      

      {
        cabañasDisponibles.length > 0 
          ? <>
              <hr />
              <h3 className='titulo-las-cabañas-disponibles'>
                Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al{' '}
                {fechaHasta.toFormat('dd/MM/yyyy')}:
              </h3>

              {
                cabañasDisponibles.map((cabaña) => {
                  return (
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
                  )
                })
              }
            </>
          :  <>
                <p className='mensaje-no-fechas-disponibles'>
                  EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES
                </p>

                <br />

                <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                <br />
                <Link to="/cabanas">
                  <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                </Link>
             </>
         
             
      }

     
    </>
  );
};

export default FiltroFechas; */




/* import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  const inf = useContext(Context);

  const [cabañasDisponibles, setCabañasDisponibles] = useState([]);

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

  const containerRef = useRef(null); // Referencia al elemento contenedor

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      // Scroll suave al elemento contenedor cuando startDate y endDate tienen valores
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (inf.startDate && inf.endDate) {
      const cabañasDisponiblesTemp = todasLasCabañas.filter((cabaña) => {
        const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
        return fechasEnComun.length < 1;
      });

      setCabañasDisponibles(cabañasDisponiblesTemp);
    }
  }, [inf.startDate, inf.endDate]);

  console.log(cabañasDisponibles.length);

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={(e) => inf.setStartDate(e.target.value)}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={(e) => inf.setEndDate(e.target.value)}
            min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd')}
            max='9999-12-31'
          />
        </div>
      </div>

      {inf.startDate && inf.endDate && cabañasDisponibles.length > 0
      ? (
        <>
          <hr />
          <h3 className='titulo-las-cabañas-disponibles'>
            Cabañas disponibles del {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')}:
          </h3>

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
        </>
      ) : (
        <>
          <p className='mensaje-no-fechas-disponibles'>EN ESAS FECHAS NO HAY CABAÑAS DISPONIBLES</p>

          <br />

          <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
          <br />
          <Link to='/cabanas'>
            <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
          </Link>
        </>
      )}
    </>
  );
};

export default FiltroFechas; */




import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { DateTime } from 'luxon';
import './FiltroFechas.css';

const FiltroFechas = () => {
  const inf = useContext(Context);

  const [cabañasDisponibles, setCabañasDisponibles] = useState([]);

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

  const containerRef = useRef(null); // Referencia al elemento contenedor

  useEffect(() => {
    if (containerRef.current && inf.startDate && inf.endDate) {
      // Scroll suave al elemento contenedor cuando startDate y endDate tienen valores
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (inf.startDate && inf.endDate) {
      const cabañasDisponiblesTemp = todasLasCabañas.filter((cabaña) => {
        const fechasEnComun = tdFechas.filter((fecha) => cabaña.available_days.includes(fecha));
        return fechasEnComun.length < 1;
      });

      setCabañasDisponibles(cabañasDisponiblesTemp);
    }
  }, [inf.startDate, inf.endDate]);

  console.log(cabañasDisponibles.length);

  return (
    <>
      <div className='contenedor-date-picker' ref={containerRef}>
        <h4 className='titulo-buscar-fechas'>Buscar por fechas</h4>

        <div className='box-date-picker'>
          <label className='label-desde'>Desde:</label>
          <input
            className='calendar'
            type='date'
            onBlur={(e) => inf.setStartDate(e.target.value)}
            min={fechaActual.toFormat('yyyy-MM-dd')}
          />
          <label className='label-hasta'>Hasta:</label>
          <input
            className='calendar c2'
            type='date'
            onChange={(e) => inf.setEndDate(e.target.value)}
            min={inf.startDate ? inf.startDate : fechaActual.toFormat('yyyy-MM-dd')}
            max='9999-12-31'
          />
        </div>
      </div>


      <div className='contenedor-cabañas-disponibles'>
        {inf.startDate && inf.endDate && (
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

                <p className='mensaje-no-fechas-disponibles'>DEL {fechaDesde.toFormat('dd/MM/yyyy')} al {fechaHasta.toFormat('dd/MM/yyyy')} NO HAY CABAÑAS DISPONIBLES</p>

                <br />

                <span className='mensaje-aqui-puedes'>Aquí puedes ver todas las cabañas y sus fechas disponibles</span>
                <br />
                <Link to='/cabanas'>
                  <button className='boton-cabañas-filtro-fechas'>Cabañas</button>
                </Link>
              </>
            )}
          </>
        )}
        <hr className='linea-divisoriaF-filtrar-fechas' />
      </div>
    </>
  );
};

export default FiltroFechas;