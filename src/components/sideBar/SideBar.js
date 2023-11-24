import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComponentNavbar from "../componentNavBar/ComponentNavBar";
import "./SideBar.css";
import * as jwt_decode from "jwt-decode";

const SideBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Tomo el nombre del usuario que se loguea del token cuando el componente se monta
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode.default(token);
      //console.log('Decoded Token:', decodedToken);

      setUserName(decodedToken.userName);
      //console.log(decodedToken.userName);
    }
  }, [userName]);

  const handleLogout = () => {
    // Eliminar el token y el rol del usuario del local storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirigir al usuario a la página de inicio
    window.location.replace("/");
  };
  return (
    <>
      <div className="sidebar">
        <p
          onClick={() => {
            let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none";
          }}
          className="close-sidebar"
        >
          X
        </p>

        <div
          onClick={() => {
            let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none";
          }}
          className="component-sidebar"
        >
          <Link to="/">
            <ComponentNavbar name={"Home"} />
          </Link>
        </div>

        <div
          onClick={() => {
            let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none";
          }}
          className="component-sidebar"
        >
          <Link to="/cabanas">
            <ComponentNavbar name={"Cabañas"} />
          </Link>
        </div>

        <div
          onClick={() => {
            let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none";
          }}
          className="component-sidebar"
        >
          <Link to="/contact">
            <ComponentNavbar name={"Contacto"} />
          </Link>
        </div>

        {localStorage.getItem("role") === "admin" && (
          <div
            onClick={() => {
              let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none";
            }}
            className="component-sidebar"
          >
            <Link to="/admin">
              <ComponentNavbar name={"Admin"} />
            </Link>
          </div>
        )}


        {
          <div
            onClick={() => {
              let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none";
            }}
            className="component-sidebar"
          >
            <Link to="/registerUser">
              <ComponentNavbar name={"Registrate"} />
            </Link>
          </div>
        }

        {userName ? (
          <div className="user-name component-sidebar">
            <span>{userName}</span>
          </div>
        ) : (
          localStorage.getItem("role") !== "admin" && (
            <div
              onClick={() => {
                let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none";
              }}
              className="component-sidebar"
            >
              <Link to="/login">
                <ComponentNavbar name={"Iniciar sesión"} />
              </Link>
            </div>
          )
        )}

        {/* Mostrar el botón "Cerrar sesión" solo si el usuario tiene el rol de "admin" */}
        {localStorage.getItem("token") && (
          <div className="component-sidebar">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
