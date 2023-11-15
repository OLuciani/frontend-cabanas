import React, {useState, useEffect} from "react";

export const Context = React.createContext({});

export default function ContextProvider({children}) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [data, setData] = useState([]);
    const [fechasReservadas, setFechasReservadas] = useState([]);
    const [totalDaysReservation, setTotalDaysReservation] = useState([]);
    const [listadoDeReservas, setListadoDeReservas] = useState([]);
    const [usersAndAdmins, setUsersAndAdmins] = useState([]);
   
    useEffect(() => { 
        fetch('https://cabanas-backend.onrender.com/api/list')
          .then((res) => res.json())
          .then((allCabañas) => {
            setData(allCabañas);
          })
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => { 
          fetch('https://cabanas-backend.onrender.com/api/reservation_register', {
          //fetch('http://localhost:5005/api/reservation_register', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      })
          .then((res) => res.json())
          .then((todasLasReservas) => {
            setListadoDeReservas(todasLasReservas);
          })
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => { 
        fetch('https://cabanas-backend.onrender.com/api/register_user_list', {
        //fetch('http://localhost:5005/api/register_user_list', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      })
          .then((res) => res.json())
          .then((allUsers) => {
            setUsersAndAdmins(allUsers);
          })
          .catch((error) => console.log(error));
      }, []);
   
    return (
        <Context.Provider value={{startDate, setStartDate, endDate, setEndDate, data, setData, fechasReservadas, setFechasReservadas, totalDaysReservation, setTotalDaysReservation, listadoDeReservas, setListadoDeReservas, usersAndAdmins, setUsersAndAdmins}}>
            {children}
        </Context.Provider>
    )
}