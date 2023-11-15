import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";

const Login = () => {
  const schema = yup.object().shape({
    user_name: yup.string().required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loginMessage, setLoginMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        //"http://localhost:5005/api/login", 
        "https://cabanas-backend.onrender.com/api/login",  
        data
      );

      // Si el inicio de sesión es exitoso, el backend debe enviar el token JWT y el rol del usuario en la respuesta
      const { token, role } = response.data;

      // Guardar el token JWT y el rol del usuario en el local storage para mantener la sesión
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      console.log("Inicio de sesión exitoso");

      // Redirigir al usuario a la página deseada después del inicio de sesión exitoso
      window.location.replace("/"); // Cambiar '/create-cabana' por la ruta que deseas redireccionar

      // Limpiar el formulario después de enviar los datos
      reset();
    } catch (error) {
      console.error(error);
      if (error.response) {
        setLoginMessage(error.response.data.message);
      } else {
        setLoginMessage("Error en la autenticación");
      }
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />

      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group-login">
            <label>Nombre de usuario:</label>
            <input type="text" name="user_name" {...register("user_name")} />
            {errors.user_name && (
              <p className="error-message">{errors.user_name.message}</p>
            )}
          </div>

          <div className="form-group-login">
            <label>Contraseña:</label>
            <input type="password" name="password" {...register("password")} />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div className="contenedor-boton-login">
            <button className="button-login" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
        {loginMessage && <p>{loginMessage}</p>}
      </div>

      <Footer />
    </>
  );
};

export default Login;
