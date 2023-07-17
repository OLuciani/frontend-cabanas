import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabanas from './components/cabañas/Cabanas';
import ContextProvider from './components/context/Context';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import VerFechas from './components/verFechas/VerFechas';
import DetallesCabana from './components/detallesCabana/DetallesCabana';
//import DetallesReservas from './components/detallesReservas/DetallesReservas';
import Reservar from './components/reservar/Reservar';
import EnviarMail from './components/enviarEmail/EnviarEmail';
//import { EnviarEmail } from './components/enviarEmail/EnviarEmail';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabanas" element={<Cabanas />} />
            <Route path="/detallesCabana/:_id" element={<DetallesCabana />} />
            {/* <Route path="/detallesReservas/:_id" element={<DetallesReservas />} /> */}
            <Route path="/reservar/:_id" element={<Reservar />} />
            <Route path="/verFechas/:_id" element={<VerFechas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enviarEmail" element={<EnviarMail />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
