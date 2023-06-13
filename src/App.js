import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabanas from './components/cabañas/Cabanas';
import ContextProvider from './components/context/Context';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import VerFechas from './components/verFechas/VerFechas';
//import CabañasDetails from './components/cabañasDetails/CabañasDetails';
//import FechasPorCabaña from './components/fechasPorCabaña/FechasPorCabaña';
import DetallesCabana from './components/detallesCabana/DetallesCabana';
//import CabanasDisponibles from './components/cabanasDisponibles/CabanasDisponibles';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabanas" element={<Cabanas />} />
{/*             <Route path="/cabanasDisponibles" element={<CabanasDisponibles />} />
 */}            {/* <Route path="/cabañasDetails/:_id" element={<CabañasDetails />} /> */}
            <Route path="/detallesCabana/:_id" element={<DetallesCabana />} />
            <Route path="/verFechas/:_id" element={<VerFechas />} />
            {/* <Route path="/fechasPorCabaña/:_id" element={<FechasPorCabaña />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
