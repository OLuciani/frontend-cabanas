/* import React from 'react';
import './Register.css'; 
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, reset, watch} = useForm();

  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirm_password");

  const onSubmit = async (data) => {
    try {
       // Validar que el campo de confirmación de contraseña sea igual al campo de contraseña original
       if (data.password !== data.confirm_password) {
        console.log("La contraseña y la confirmación de contraseña no coinciden");
        return;
      }

      // Realizar la lógica para enviar los datos del registro al backend
      const response = await axios.post(
        "http://localhost:5005/api/register_user",
        data
      );

      console.log(response.data);
      console.log("Se enviaron los datos del usuario al backend correctamente");

      // Limpiar el formulario después de enviar los datos
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input type="text" name="user_name" {...register("user_name", { required: true })} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" {...register("email", { required: true })} />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="password" {...register("password", { required: true })} />
        </div>

        <div className="form-group">
          <label>Confirmar contraseña:</label>
          <input type="password" name="confirm_password" {...register("confirm_password", { required: true })} />
        </div>
        {watchConfirmPassword && watchPassword !== watchConfirmPassword && <p className="error-message">Las contraseñas no coinciden</p>}

        <div className="form-group">
          <label>Código de Administrador:</label>
          <input type="password" name="codigo_admin" {...register("codigo_admin")} />
        </div>

        <div className='contenedor-boton-registrarse'>
          <button className='button-register' type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register; */



/* 
import React from 'react';
import './Register.css'; 
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Define el esquema de validación con Yup
const schema = yup.object().shape({
  user_name: yup.string().required("Este campo es obligatorio"),
  email: yup.string().email("El formato del email no es válido").required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirm_password: yup.string().required("Este campo es obligatorio").oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
  codigo_admin: yup.string().required("Este campo es obligatorio"),
});

const Register = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema), // Indica el esquema de validación de Yup a usar
  });

  //const watchPassword = watch("password");
  //const watchConfirmPassword = watch("confirm_password");

  const onSubmit = async (data) => {
    try {
       // Validar que el campo de confirmación de contraseña sea igual al campo de contraseña original
       if (data.password !== data.confirm_password) {
        console.log("La contraseña y la confirmación de contraseña no coinciden");
        return;
      }

      // Realizar la lógica para enviar los datos del registro al backend
      const response = await axios.post(
        "http://localhost:5005/api/register_user",
        data
      );

      console.log(response.data);
      console.log("Se enviaron los datos del usuario al backend correctamente");

      // Limpiar el formulario después de enviar los datos
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input type="text" name="user_name" {...register("user_name", { required: true })} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" {...register("email", { required: true })} />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="password" {...register("password", { required: true })} />
        </div>

        <div className="form-group">
          <label>Confirmar contraseña:</label>
          <input type="password" name="confirm_password" {...register("confirm_password", { required: true })} />
        </div>
        {watchConfirmPassword && watchPassword !== watchConfirmPassword && <p className="error-message">Las contraseñas no coinciden</p>}

        <div className="form-group">
          <label>Código de Administrador:</label>
          <input type="password" name="codigo_admin" {...register("codigo_admin")} />
        </div>

        <div className='contenedor-boton-registrarse'>
          <button className='button-register' type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register;  */


/* import React from 'react';
import './Register.css'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from "yup";
import axios from "axios";

const Register = () => {
  const schema = yup.object().shape({
    user_name: yup.string().required("Este campo es obligatorio"),
    email: yup.string().email("El formato del email no es válido").required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirm_password: yup.string().required("Este campo es obligatorio").oneOf([yup.ref("password")], "Las contraseñas no coinciden"), es_admin: yup.boolean(),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Realizar la lógica para enviar los datos del registro al backend
      const response = await axios.post(
        "http://localhost:5005/api/register_user",
        data
      );

      console.log(response.data);
      console.log("Se enviaron los datos del usuario al backend correctamente");

      // Limpiar el formulario después de enviar los datos
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input type="text" name="user_name" {...register("user_name")} />
          {errors.user_name && <p className="error-message">{errors.user_name.message}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" {...register("email")} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="password" {...register("password")} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>Confirmar contraseña:</label>
          <input type="password" name="confirm_password" {...register("confirm_password")} />
          {errors.confirm_password && <p className="error-message">{errors.confirm_password.message}</p>}
        </div>

        <div className='contenedor-boton-registrarse'>
          <button className='button-register' type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register; */




import React, { useContext} from 'react';
import './RegisterUser.css'; 
import { Context } from "../context/Context";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';

const RegisterUser = () => {
  const infoBD = useContext(Context);

  const actualizarListadoDeUsuarios = async () => {
    try {
      // Actualizar la lista de reservas en el context
      //const response = await fetch('http://localhost:5005/api/register_user_list', {   
      const response = await fetch('https://cabanas-backend.onrender.com/api/register_user_list', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const todosLosUsuarios = await response.json();
      infoBD.setUsersAndAdmins(todosLosUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  const schema = yup.object().shape({
    user_name: yup.string().required('Este campo es obligatorio'),
    email: yup.string().email('El formato del email no es válido').required('Este campo es obligatorio'),
    password: yup.string().required('Este campo es obligatorio').min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirm_password: yup.string().required('Este campo es obligatorio').oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Realizar la lógica para enviar los datos del registro al backend
      const response = await axios.post(
        //'http://localhost:5005/api/register_user',
        'https://cabanas-backend.onrender.com/api/register_user',
        data
      );

      console.log(response.data);
      console.log('Se enviaron los datos del usuario al backend correctamente');

      // Actualizar listadoDeReservas
      actualizarListadoDeUsuarios();

      // Limpiar el formulario después de enviar los datos
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />

      <div className="register-container">
        <h2>Registro de Usuarios</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre de usuario:</label>
            <input type="text" name="user_name" {...register('user_name')} />
            {errors.user_name && <p className="error-message">{errors.user_name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" {...register('email')} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="password" {...register('password')} />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <div className="form-group">
            <label>Confirmar contraseña:</label>
            <input type="password" name="confirm_password" {...register('confirm_password')} />
            {errors.confirm_password && <p className="error-message">{errors.confirm_password.message}</p>}
          </div>

          {/* Mostrar los botones "Editar cabaña" y "Eliminar cabaña"solo si el usuario es administrador */}
          {localStorage.getItem('role') === 'admin' && ( 
            <div className="form-group">
              <label>¿Registrarse como administrador?</label>
              <input type="checkbox" name="es_admin" {...register('es_admin')} />
            </div>
          )}

          <div className="contenedor-boton-registrarse">
            <button className="button-register" type="submit">Registrarse</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default RegisterUser;