// eslint-disable-next-line
import React, { useEffect } from 'react';
import axios from 'axios';
import "../enviarEmail/EnviarEmail.css";

const EnviarMail = ({ mensaje, correo }) => {
  useEffect(() => {
    const enviarCorreo = async () => {
      if (correo && mensaje) {
        const emailData = {
          to: correo,
          subject: 'Reserva en Hernandez-Cabañas',
          content: mensaje
        };

        try {
          const response = await axios.post('https://cabanas-backend.onrender.com/api/send_mail', emailData);
          console.log('Correo electrónico enviado:', response.data);
        } catch (error) {
          console.error('Error al enviar el correo electrónico:', error);
        }
      }
    };

    enviarCorreo();
  }, [mensaje, correo]);

  return null;
};

export default EnviarMail;