import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../context/Context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateCabana.css";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";

const UpdateCabana = () => {
  const infoBD = useContext(Context);
  const navigate = useNavigate();

  // Obtener el token JWT del almacenamiento local (por ejemplo, localStorage)
  //const token = localStorage.getItem("token");

  const { _id } = useParams();
  let cabana = infoBD.data.find((cab) => cab._id === _id);

  const form = useRef();
  const { register, handleSubmit, setValue } = useForm();

  const [newPositions, setNewPositions] = useState([]);

  // Setear los valores actuales de la cabaña en el formulario al cargar el componente
  useEffect(() => {
    setValue("name", cabana.name);
    setValue("rooms", cabana.rooms);
    setValue("price", cabana.price);
    setValue("description", cabana.description);
    setValue("services", cabana.services);
    setValue("url_image", cabana.url_image);
    setValue("url_images", cabana.url_images);
  }, [cabana, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("rooms", data.rooms);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("services", data.services);
      formData.append("url_image", data.url_image); // Use data.url_image instead of cabana.url_image
      formData.append("url_images", JSON.stringify(data.url_images)); // Convertir a cadena antes de enviar

      const nuevasPosiciones = []

      if (data.imagen1 && data.imagen1.length > 0) {
        formData.append("image[]", data.imagen1[0]);
        nuevasPosiciones.push(1);
      } 

      if (data.imagen2 && data.imagen2.length > 0) {
        formData.append("image[]", data.imagen2[0]);
        nuevasPosiciones.push(2);      
      } 

      if (data.imagen3 && data.imagen3.length > 0) {
        formData.append("image[]", data.imagen3[0]);
        nuevasPosiciones.push(3);      
      } 
      
      if (data.imagen4 && data.imagen4.length > 0) {
        formData.append("image[]", data.imagen4[0]);
        nuevasPosiciones.push(4);      
      }

      if (data.imagen5 && data.imagen5.length > 0) {
        formData.append("image[]", data.imagen5[0]);
        nuevasPosiciones.push(5);      
      } 

      if (data.imagen6 && data.imagen6.length > 0) {
        formData.append("image[]", data.imagen6[0]);
        nuevasPosiciones.push(6);      
      } 

      if (data.imagen7 && data.imagen7.length > 0) {
        formData.append("image[]", data.imagen7[0]);
        nuevasPosiciones.push(7);      
      } 
      
      if (data.imagen8 && data.imagen8.length > 0) {
        formData.append("image[]", data.imagen8[0]);
        nuevasPosiciones.push(8);      
      } 

      
      
      console.log("Valor de nuevasPosiciones: ", nuevasPosiciones);

      setNewPositions(nuevasPosiciones); // Actualizar el estado con el nuevo array

      console.log("Valor de newPositions: ", newPositions);
      
      formData.append("newPositions", nuevasPosiciones);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",

          // Agregué el token JWT en el encabezado de la solicitud
          //Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        //`http://localhost:5005/api/update_cabana/${_id}`,  
        `https://cabanas-backend.onrender.com/api/update_cabana/${_id}`,
        formData,
        config
      );

      console.log(response.data);
      console.log("Se actualizaron los datos al backend correctamente");
      // Redirigir a la página de detalles de la cabaña después de la actualización par ver si se editó correctamente la cabaña.
      navigate(`/detallesCabana/${_id}`);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <NavBar />
      <SideBar />

      <h3>Editar Cabaña</h3>

      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Nombre:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("name", { required: true })}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">
            Cantidad de habitaciones:
          </label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("rooms", { required: true })}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Precio:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("price", { required: true })}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Descripción:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("description", { required: true })}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Servicios:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("services", { required: true })}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Url imágen 1:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("url_image", { required: true })}
            readOnly
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Url imágenes de la 2 a la 8:</label>
          <br />
          <input
            className="input-update-cabana"
            type="text"
            {...register("url_images", { required: true })}
            readOnly
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">
            Cargar imagen 1 (foto principal):
          </label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple //todos los inputs file deben llevar el atributo multiple p/poder enviar más de una imagen
            name="image[]" //Todos los inputs file llevan el mismo name y [] para que multer los reciba como array en upload.array
            {...register("imagen1")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 2:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen2")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 3:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen3")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 4:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen4")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 5:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen5")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 6:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen6")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 7:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen7")}
          />
        </div>

        <div className="contenedor-inputs-update-cabana">
          <label className="label-input-update-cabana">Cargar imagen 8:</label>
          <br />
          <input
            className="input-update-cabana"
            type="file"
            multiple
            name="image[]"
            {...register("imagen8")}
          />
        </div>

        <input
          type="hidden"
          {...register("newPositions")}
          value={newPositions}
        />

        <button className="boton-update-cabana" type="submit">
          Editar cabaña
        </button>
      </form>

      <Footer />
    </>
  );
};

export default UpdateCabana;

