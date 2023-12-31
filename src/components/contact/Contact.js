import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./Contact.css";
import SideBar from '../sideBar/SideBar';


const Contact = () => {
  return (
    <>
      <header>
        <NavBar />
        <SideBar />
      </header>

      <main className='div-box-contact container-fluid'> 
        <h2 className='text-center titulo-contact'>Información de contacto</h2>

        <div className='items-contact'>
          <div className='box-p-icon'>
            <i className="bi bi-geo-alt-fill"></i>
            <p className='direccion'><b className='espacio'>Dirección:</b>Sucre 32 - Ciudad de Córdoba<br/>Argentina.</p>
          </div> 

          <div className='box-p-icon'>
            <i className="bi bi-telephone-fill" />
            <p><b className='espacio'>Teléfono:</b>54 9 351 123456</p>
          </div>   
        
          <div className='box-p-icon'>   
            <i className="bi bi-envelope-at-fill" />
            <p><b className='espacio'>Email:</b> hernandezcabañas@gmail.com</p>
          </div> 

          <div className='box-p-icon'>
            <i className="bi bi-facebook" /> 
            <p><b>Facebook</b></p>
          </div>

          <div className='box-p-icon'>
            <i className="bi bi-instagram" />
            <p><b>Instagram</b></p>
          </div>

          <div className='div-linkedin'>
            <a href="https://www.linkedin.com/in/oscarluciani">
            <div className='box-p-icon'>
                <i className="bi bi-linkedin"></i>
                <p><b>Linkedin</b></p>
            </div>
            </a>
          </div>
        </div>
      </main>

      <footer className="footer-contact">
        <Footer />
      </footer>
    </>
  )
}

export default Contact;