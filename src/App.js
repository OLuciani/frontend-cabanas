import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabanas from './components/cabañas/Cabanas';
import ContextProvider from './components/context/Context';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import VerFechas from './components/verFechas/VerFechas';
import DetallesCabana from './components/detallesCabana/DetallesCabana';
//import Reservar from './components/reservar/Reservar';
import EnviarMail from './components/enviarEmail/EnviarEmail';
import CreateCabana from './components/createCabana/CreateCabana';
import EditCabana from './components/editCabana/EditCabana';
import UpdateCabana from './components/updateCabana/UpdateCabana';
//import Register from './components/register/Register';
import Login from './components/login/Login';
import DeleteCabana from './components/deleteCabana/DeleteCabana';
import Administrador from './components/administrador/Administrador';
import ListadoReservas from './components/listadoReservas/ListadoReservas';
import RegisterUser from './components/registerUser/RegisterUser';
//import UsersAndAdmins from './components/usersAndAdmins/UsersAndAdmins';
import UpdateReservar from './components/updateReservar/UpdateReservar';
import DetailsReservar from './components/detailsReservar/DetailsReservar';
import DeleteReserva from './components/deleteReserva/DeleteReserva';
import UsersAndAdminsList from './components/usersAndAdminsList/UsersAndAdminsList';
import DetailsUsers from './components/detailsUsers/DetailsUsers';
import UpdateUser from './components/updateUser/UpdateUser';
import DeleteUser from './components/deleteUser/DeleteUser';
import ModalReservar from './components/modals/modalReservar/ModalReservar';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabanas" element={<Cabanas />} />
            <Route path="/detallesCabana/:_id" element={<DetallesCabana />} />
            <Route path="/reservar/:_id" element={<ModalReservar />} />
            <Route path="/detailsReservar/:_id" element={<DetailsReservar />} />
            <Route path="/updateReservar/:_id" element={<UpdateReservar />} />
            <Route path="/deleteReserva/:_id" element={<DeleteReserva />} />
            <Route path="/verFechas/:_id" element={<VerFechas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enviarEmail" element={<EnviarMail />} />
            <Route path="/createCabaña" element={<CreateCabana />} />
            <Route path="/editCabana" element={<EditCabana />} />
            <Route path="/deleteCabana/:_id" element={<DeleteCabana />} />
            <Route path="/updateCabana/:_id" element={<UpdateCabana />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/listadoReservas" element={<ListadoReservas />} />
            <Route path="/usersAndAdminsList" element={<UsersAndAdminsList />} />
            <Route path="/detailsUsers/:_id" element={<DetailsUsers />} />
            <Route path="/updateUser/:_id" element={<UpdateUser />} />
            <Route path="/deleteUser/:_id" element={<DeleteUser />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
