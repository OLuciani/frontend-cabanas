import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../footer/Footer';
import NavBar from '../../navBar/NavBar';
import SideBar from '../../sideBar/SideBar';
import "./UpdateUser.css";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import axios from "axios";


const UpdateUser = () => {
  const information = useContext(Context);

  const form = useRef();

  const { register, handleSubmit, setValue } = useForm();

  const { _id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const usuario = information.usersAndAdmins.find((unUsuario) => unUsuario._id === _id);
    // Llenar los campos con los valores de la reserva actual
    setValue("user_name", usuario.user_name);
    setValue("email", usuario.email);
    //setValue("password", usuario.password);
  }, [information.usersAndAdmins, _id, setValue]);

  const updateListadoDeUsuarios = async () => {
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
      information.setUsersAndAdmins(todosLosUsuarios);
    } catch (error) {
      console.log(error);
    }
  };


    const onSubmit = async (data) => {
        try {
          // Realizar la lógica para enviar los datos del usuario editado al backend
          const { newPassword, confirmNewPassword, ...userData } = data;

          if (newPassword && newPassword !== confirmNewPassword) {
            console.log('Las contraseñas no coinciden');
            return;
          }

          // Elimina las propiedades de contraseña del objeto si no se proporciona una nueva contraseña
          if (!newPassword) {
            delete userData.newPassword;
          }
          // Realizar la lógica para enviar los datos del registro al backend
          /* const response = await axios.put(`http://localhost:5005/api/update_user/${_id}`, data); */ 
          const response = await axios.put(`https://cabanas-backend.onrender.com/api/update_user/${_id}`, data);
          console.log(response.data);
          console.log('Se enviaron los datos del usuario al backend correctamente');

          // Actualizar la lista de reservas en el contexto
          updateListadoDeUsuarios();
          // Redirecciono para ver lista de usuarios y administradores
          navigate("/usersAndAdminsList");
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <>
      <NavBar />
      <SideBar />

      <div className="register-container">
      <h3>Editar Administrador o Usuario</h3>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre de usuario:</label>
            <input type="text" name="user_name" {...register('user_name')} />
            {/* {errors.user_name && <p className="error-message">{errors.user_name.message}</p>} */}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" {...register('email')} />
            {/* {errors.email && <p className="error-message">{errors.email.message}</p>} */}
          </div>

          <div className="form-group">
            <label>Nueva contraseña:</label>
            <input type="password" name="newPassword" {...register('newPassword')} />
          </div>

          <div className="form-group">
            <label>Confirmar nueva contraseña:</label>
            <input type="password" name="confirmNewPassword" {...register('confirmNewPassword')} />
          </div>

         {/*  <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="password" {...register('password')} />
          </div> */}

          {/* Mostrar los botones "Editar cabaña" y "Eliminar cabaña"solo si el usuario es administrador */}
          {localStorage.getItem('role') === 'admin' && ( 
            <div className="form-group">
              <label>¿Registrarse como administrador?</label>
              <input type="checkbox" name="es_admin" {...register('es_admin')} />
            </div>
          )}

          <div className="contenedor-boton-registrarse">
            <button className="button-register" type="submit">Editar adninistrador/usuario</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default UpdateUser;