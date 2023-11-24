import React from 'react'
import { Link } from 'react-router-dom';
import "./ModalUsuarioNoRegistrado.css";

const ModalUsuarioNoRegistrado = () => {
  return (
    <div className='container-general-unr'>
      <div className='container-usuario-no-registrado'>
        {/* <p className='close-usuario-no-registrado'>X</p> */}
        <div className='mensaje-usuario-no-registrado'>
          <p>Para reservar una cabaña debes estar registrado y haber iniciado sesión.</p>
        </div>

        <div className='mensaje-iniciar-sesion'>
          <p>Si estás registrado, inicia sesión.</p>
        </div>

        <div className='registrate'>
          <Link to={"/login"}  >
            <p className='p-registrate'>Iniciar sesión</p>
          </Link>
        </div>

        <div className='mensaje-registrate'>
          <p>Si aún no te has registrado, puedes hacerlo desde aquí.</p>
        </div>

        <div className='registrate'>
          <Link to={"/registerUser"}  >
            <p className='p-registrate'>Registrate</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModalUsuarioNoRegistrado;