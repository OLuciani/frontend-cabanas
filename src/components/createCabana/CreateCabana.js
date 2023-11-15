/* //Este código anda bien, envia solo hasta la primera imagen.
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";


const CreateCabana = () => {
    const form = useRef();
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (data) => {
        try {
          const formData = new FormData(form.current);
          const response = await axios.post('http://localhost:5005/api/create_cabana', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log(response.data);
          console.log('Se creó una nueva cabaña en la Base de Datos');
          // Limpiar los campos después del envío exitoso
          reset();
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <>
        <h3>Crear Cabaña</h3>

        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Nombre:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("name", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cantidad de habitaciones:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("rooms", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Precio:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("price", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Descripción:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("description", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Servicios:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("services", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen:</label>
                <br />
                <input className="campo-input-reservar" type="file" name="url_image" {...register("url_image", { required: true })} />
            </div>
            <button className="boton-crear-cabaña" type="submit">Crear cabaña</button>
        </form>
    </>
  )
}

export default CreateCabana; */



//Este codigo falla enviando las 8 imagenes, no llegan.
/* import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./CreateCabana.css";
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';
import Footer from '../footer/Footer';

const CreateCabana = () => {
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData(form.current);
      const response = await axios.post('http://localhost:5005/api/create_cabana', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      console.log('Se creó una nueva cabaña en la Base de Datos');
      // Limpiar los campos después del envío exitoso
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <NavBar />
        <SideBar />

        <div className='contenedor-create-cabana'>
            <h3 className='titulo-crear-cabaña'>Crear Cabaña</h3>

            <form ref={form} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Nombre:</label>
                <br />
                <input className="input-create-cabanas" type="text" {...register('name', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cantidad de habitaciones:</label>
                <br />
                <input className="input-create-cabanas" type="text" {...register('rooms', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Precio:</label>
                <br />
                <input className="input-create-cabanas" type="text" {...register('price', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Descripción:</label>
                <br />
                <input className="input-create-cabanas" type="text" {...register('description', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Servicios:</label>
                <br />
                <input className="input-create-cabanas" type="text" {...register('services', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 1 (Principal):</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image" {...register('url_image', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 2:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_2" {...register('url_image_2', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 3:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_3" {...register('url_image_3', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 4:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_4" {...register('url_image_4', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 5:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_5" {...register('url_image_5', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 6:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_6" {...register('url_image_6', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 7:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_7" {...register('url_image_7', { required: true })} />
                </div>

                <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen 8:</label>
                <br />
                <input className="input-create-cabanas" type="file" name="url_image_8" {...register('url_image_8', { required: true })} />
                </div> 

                <button className="boton-crear-cabaña" type="submit">
                Crear cabaña
                </button>
            </form>
        </div>

        <Footer />
    </>
  );
};

export default CreateCabana; */

/* 
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";


const CreateCabana = () => {
    const form = useRef();
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (data) => {
        try {
          const formData = new FormData(form.current);
          const response = await axios.post('http://localhost:5005/api/create_cabana', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log(response.data);
          console.log('Se creó una nueva cabaña en la Base de Datos');
          // Limpiar los campos después del envío exitoso
          reset();
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <>
        <h3>Crear Cabaña</h3>

        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Nombre:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("name", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cantidad de habitaciones:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("rooms", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Precio:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("price", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Descripción:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("description", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Servicios:</label>
                <br />
                <input className="campo-input-reservar" type="text" {...register("services", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen:</label>
                <br />
                <input className="campo-input-reservar" type="file" name="url_image" {...register("url_image", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen:</label>
                <br />
                <input className="campo-input-reservar" type="file" name="campo_1" {...register("campo_1", { required: true })} />
            </div>

            <div className="contenedor-inputs-reservar">
                <label className="label-input-reservar">Cargar imágen:</label>
                <br />
                <input className="campo-input-reservar" type="file" name="campo_2" {...register("campo_2", { required: true })} />
            </div>
            <button className="boton-crear-cabaña" type="submit">Crear cabaña</button>
        </form>
    </>
  )
}

export default CreateCabana; */




//Componente andando perfecto.
/* import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateCabana.css";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";

const CreateCabana = () => {
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // Obtener el token JWT del almacenamiento local (por ejemplo, localStorage)
  const token = localStorage.getItem("token");

  //console.log(token);

  
  //Función en la que envío los datos del formulario al backend. 
  const onSubmit = async (data) => {
    try {
      // Creo un objeto FormData para enviar datos y archivos al backend.
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("rooms", data.rooms);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("services", data.services);
      formData.append('image[]', data.imagen1[0]);//De esta forma puedo enviar de a varias imágenes p/q sean recibidas como array.
      formData.append('image[]', data.imagen2[0]);
      formData.append('image[]', data.imagen3[0]);
      formData.append('image[]', data.imagen4[0]);
      formData.append('image[]', data.imagen5[0]);
      formData.append('image[]', data.imagen6[0]);
      formData.append('image[]', data.imagen7[0]);
      formData.append('image[]', data.imagen8[0]);

      const config = {
        headers: {
          //Para que el backend reciba las imágenes con multer.
          'Content-Type': 'multipart/form-data',
          // Agregué el token JWT en el encabezado de la solicitud
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        'http://localhost:5005/api/create_cabana',
        formData,
        config
      );

      console.log(response.data);
      console.log('Se enviaron las imágenes al backend correctamente');
      // Limpiar los campos después del envío exitoso
      reset();
      // Redirigir a la página donde se muestran todas las cabañas después de la actualización y controlar si se creó correctamente.
      navigate(`/cabanas`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />

      <h3>Crear Cabaña</h3>

      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Nombre:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("name", { required: true })} />
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Cantidad de habitaciones:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("rooms", { required: true })} />
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Precio:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("price", { required: true })} />
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Descripción:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("description", { required: true })} />
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Servicios:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("services", { required: true })} />
            </div>

            <div className="contenedor-inputs-create-cabana">
              <label className="label-input-create-cabana">Cargar imagen 1 (foto principal):</label>
              <br />
              <input
                className="input-create-cabana"
                type="file"
                multiple  //todos los inputs file deben llevar el atributo multiple p/poder enviar más de una imagen
                name="image[]" //Todos los inputs file llevan el mismo name y [] para que multer los reciba como array en upload.array
                {...register('imagen1', { required: true })}
              />
           </div>

            <div className="contenedor-inputs-create-cabana">
              <label className="label-input-create-cabana">Cargar imagen 2:</label>
              <br />
              <input
                className="input-create-cabana"
                type="file"
                multiple
                name="image[]"
                {...register('imagen2', { required: true })}
              />
            </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 3:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen3', { required: true })}
          />
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 4:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen4', { required: true })}
          />
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 5:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen5', { required: true })}
          />
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 6:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen6', { required: true })}
          />
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 7:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen7', { required: true })}
          />
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 8:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen8', { required: true })}
          />
        </div>

        <button className="boton-crear-cabaña" type="submit">
          Crear cabaña
        </button>
      </form>

      <Footer />
    </>
  );
};

export default CreateCabana; */





/* import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateCabana.css";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CreateCabana = () => {
  const form = useRef();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const schema = yup.object().shape({
    name: yup.string().required('Este campo es obligatorio'),
    rooms: yup.string().required('Este campo es obligatorio'),
    price: yup.string().required('Este campo es obligatorio'),
    description: yup.string().required('Este campo es obligatorio'),
    services: yup.string().required('Este campo es obligatorio'),
    imagen1: yup.mixed().required('Debes cargar una imagen'),
    imagen2: yup.mixed().required('Debes cargar una imagen'),
    imagen3: yup.mixed().required('Debes cargar una imagen'),
    imagen4: yup.mixed().required('Debes cargar una imagen'),
    imagen5: yup.mixed().required('Debes cargar una imagen'),
    imagen6: yup.mixed().required('Debes cargar una imagen'),
    imagen7: yup.mixed().required('Debes cargar una imagen'),
    imagen8: yup.mixed().required('Debes cargar una imagen'),
  });

  const { register, handleSubmit, reset, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Hide the error message when any imagen field is not empty
    if (
      getValues("imagen1") ||
      getValues("imagen2") ||
      getValues("imagen3") ||
      getValues("imagen4") ||
      getValues("imagen5") ||
      getValues("imagen6") ||
      getValues("imagen7") ||
      getValues("imagen8") 
    ) {
      setValue("imagen1", null);
      setValue("imagen2", null);
      setValue("imagen3", null);
      setValue("imagen4", null);
      setValue("imagen5", null);
      setValue("imagen6", null);
      setValue("imagen7", null);
      setValue("imagen8", null);
    }
  }, [getValues, setValue]); 

  // useEffect(() => {
   // if (getValues("imagen1")) {
   //   setValue("imagen1", null);
  // } 
    //if (getValues("imagen2")) {
   //   setValue("imagen2", null);
   // }
  //  if (getValues("imagen3")) {
   //   setValue("imagen3", null);
   // }
   // if (getValues("imagen4")) {
      //setValue("imagen4", null);
    //}
    //if (getValues("imagen5")) {
     // setValue("imagen5", null);
    //}
    //if (getValues("imagen6")) {
      //setValue("imagen6", null);
    //}
    //if (getValues("imagen7")) {
      //setValue("imagen7", null);
   //}
    //if (getValues("imagen8")) {
      //setValue("imagen8", null);
    //}
  //}, [getValues, setValue]); 


  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("rooms", data.rooms);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("services", data.services);
      formData.append('image[]', data.imagen1[0]);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        'http://localhost:5005/api/create_cabana',
        formData,
        config
      );

      console.log(response.data);
      reset();
      navigate(`/cabanas`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <h3>Crear Cabaña</h3>

      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Nombre:</label>
          <br />
          <input className="input-create-cabana" type="text" {...register("name", { required: true })} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cantidad de habitaciones:</label>
          <br />
          <input className="input-create-cabana" type="text" {...register("rooms", { required: true })} />
          {errors.rooms && <p className="error-message">{errors.rooms.message}</p>}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Precio:</label>
          <br />
          <input className="input-create-cabana" type="text" {...register("price", { required: true })} />
          {errors.price && <p className="error-message">{errors.price.message}</p>}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Descripción:</label>
          <br />
          <input className="input-create-cabana" type="text" {...register("description", { required: true })} />
          {errors.description && <p className="error-message">{errors.description.message}</p>}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Servicios:</label>
          <br />
          <input className="input-create-cabana" type="text" {...register("services", { required: true })} />
          {errors.services && <p className="error-message">{errors.services.message}</p>}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 1 (foto principal):</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen1')}
            />
            {(errors.imagen1 && getValues('imagen1') === null) && (
              <p className="error-message">Debes cargar una imagen</p>
            )}
        </div>

        <div className="contenedor-inputs-create-cabana">
              <label className="label-input-create-cabana">Cargar imagen 2:</label>
              <br />
              <input
                className="input-create-cabana"
                type="file"
                multiple
                name="image[]"
                {...register('imagen2')}
                />
                {(errors.imagen2 || getValues('imagen2') === null) && (
                  <p className="error-message">Debes cargar una imagen</p>
                )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 3:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen3', { required: true })}
          />
          {(errors.imagen3 || getValues('imagen3') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 4:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen4', { required: true })}
          />
          {(errors.imagen4 || getValues('imagen4') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 5:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen5', { required: true })}
          />
          {(errors.imagen5 || getValues('imagen5') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 6:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen6', { required: true })}
          />
          {(errors.imagen6 || getValues('imagen6') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 7:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen7', { required: true })}
          />
          {(errors.imagen7 || getValues('imagen7') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 8:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen8', { required: true })}
          />
          {(errors.imagen8 || getValues('imagen8') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <button className="boton-crear-cabaña" type="submit">
          Crear cabaña
        </button>
      </form>

      <Footer />
    </>
  );
};

export default CreateCabana; 
 */


// Funcionan bien las validaciones y se envía correctamente el formulario al backend
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateCabana.css";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CreateCabana = () => {
  const form = useRef();
  //const { register, handleSubmit, reset } = useForm(); 

  // Obtengo función de navegación
  const navigate = useNavigate();

  // Obtenengo el token JWT del almacenamiento local (por ejemplo, localStorage)
  const token = localStorage.getItem("token");

  //console.log(token);

  // Defino esquema de validación con Yup
  const schema = yup.object().shape({
    // Defino reglas de validación para cada campo
    name: yup.string().required('Este campo es obligatorio'),
    rooms: yup.string().required('Este campo es obligatorio'),
    price: yup.string().required('Este campo es obligatorio'),
    description: yup.string().required('Este campo es obligatorio'),
    services: yup.string().required('Este campo es obligatorio'),
    imagen1: yup.mixed().required('Debes cargar una imagen'),
    imagen2: yup.mixed().required('Debes cargar una imagen'),
    imagen3: yup.mixed().required('Debes cargar una imagen'),
    imagen4: yup.mixed().required('Debes cargar una imagen'),
    imagen5: yup.mixed().required('Debes cargar una imagen'),
    imagen6: yup.mixed().required('Debes cargar una imagen'),
    imagen7: yup.mixed().required('Debes cargar una imagen'),
    imagen8: yup.mixed().required('Debes cargar una imagen'),
  });

  // Configurar el formulario con react-hook-form y el esquema de validación
  const { register, handleSubmit, reset, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
  }); 

  // Restablecer los campos de imágenes a null al montar el componente o cuando cambian los valores de los campos de imagen
   useEffect(() => {
    if (getValues("imagen1")) {
      setValue("imagen1", null);
   } 
    if (getValues("imagen2")) {
      setValue("imagen2", null);
    }
    if (getValues("imagen3")) {
      setValue("imagen3", null);
    }
    if (getValues("imagen4")) {
      setValue("imagen4", null);
    }
    if (getValues("imagen5")) {
      setValue("imagen5", null);
    }
    if (getValues("imagen6")) {
      setValue("imagen6", null);
    }
    if (getValues("imagen7")) {
      setValue("imagen7", null);
   }
    if (getValues("imagen8")) {
      setValue("imagen8", null);
    }
  }, [getValues, setValue]);

  
  //Función en la que envío los datos del formulario al backend. 
  const onSubmit = async (data) => {
    try {
      // Creo un objeto FormData para enviar datos y archivos al backend.
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("rooms", data.rooms);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("services", data.services);
      formData.append('image[]', data.imagen1[0]);//De esta forma puedo enviar de a varias imágenes p/q sean recibidas como array.
      formData.append('image[]', data.imagen2[0]);
      formData.append('image[]', data.imagen3[0]);
      formData.append('image[]', data.imagen4[0]);
      formData.append('image[]', data.imagen5[0]);
      formData.append('image[]', data.imagen6[0]);
      formData.append('image[]', data.imagen7[0]);
      formData.append('image[]', data.imagen8[0]);

      // Configuración de la solicitud HTTP
      const config = {
        headers: {
          //Para que el backend reciba las imágenes con multer.
          'Content-Type': 'multipart/form-data',
          // Agregué el token JWT en el encabezado de la solicitud
          Authorization: `Bearer ${token}`,
        },
      };

      // Enviar la solicitud POST al backend
      const response = await axios.post(
        //'http://localhost:5005/api/create_cabana',
        'https://cabanas-backend.onrender.com/api/create_cabana',
        formData,
        config
      );

      console.log(response.data);
      console.log('Se enviaron las imágenes al backend correctamente');
      // Limpiar los campos después del envío exitoso
      reset();
      // Redirigir a la página donde se muestran todas las cabañas después de la actualización y controlar si se creó correctamente.
      navigate(`/cabanas`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />

      <h3>Crear Cabaña</h3>

      {/* Formulario de creación de cabaña */}
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Nombre:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("name", { required: true })} />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Cantidad de habitaciones:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("rooms", { required: true })} />
                {errors.rooms && <p className="error-message">{errors.rooms.message}</p>}
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Precio:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("price", { required: true })} />
                {errors.price && <p className="error-message">{errors.price.message}</p>}
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Descripción:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("description", { required: true })} />
                {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>

            <div className="contenedor-inputs-create-cabana">
                <label className="label-input-create-cabana">Servicios:</label>
                <br />
                <input className="input-create-cabana" type="text" {...register("services", { required: true })} />
                {errors.services && <p className="error-message">{errors.services.message}</p>}
            </div>

            <div className="contenedor-inputs-create-cabana">
              <label className="label-input-create-cabana">Cargar imagen 1 (foto principal):</label>
              <br />
              <input
                className="input-create-cabana"
                type="file"
                multiple  //todos los inputs file deben llevar el atributo multiple p/poder enviar más de una imagen
                name="image[]" //Todos los inputs file llevan el mismo name y [] para que multer los reciba como array en upload.array
                {...register('imagen1', { required: true })}
              />
              {(errors.imagen1 && getValues('imagen1') === null) && (
              <p className="error-message">Debes cargar una imagen</p>
            )}
           </div>

            <div className="contenedor-inputs-create-cabana">
              <label className="label-input-create-cabana">Cargar imagen 2:</label>
              <br />
              <input
                className="input-create-cabana"
                type="file"
                multiple
                name="image[]"
                {...register('imagen2', { required: true })}
              />
              {(errors.imagen2 || getValues('imagen2') === null) && (
                  <p className="error-message">Debes cargar una imagen</p>
                )}
            </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 3:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen3', { required: true })}
          />
          {(errors.imagen3 || getValues('imagen3') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 4:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen4', { required: true })}
          />
           {(errors.imagen4 || getValues('imagen4') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 5:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen5', { required: true })}
          />
           {(errors.imagen5 || getValues('imagen5') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 6:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen6', { required: true })}
          />
          {(errors.imagen6 || getValues('imagen6') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 7:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen7', { required: true })}
          />
          {(errors.imagen7 || getValues('imagen7') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <div className="contenedor-inputs-create-cabana">
          <label className="label-input-create-cabana">Cargar imagen 8:</label>
          <br />
          <input
            className="input-create-cabana"
            type="file"
            multiple
            name="image[]"
            {...register('imagen8', { required: true })}
          />
          {(errors.imagen8 || getValues('imagen8') === null) && (
            <p className="error-message">Debes cargar una imagen</p>
          )}
        </div>

        <button className="boton-crear-cabaña" type="submit">
          Crear cabaña
        </button>
      </form>

      <Footer />
    </>
  );
};

export default CreateCabana;