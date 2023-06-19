//import axios from "axios";
import React, {useState, useEffect} from "react";

export const Context = React.createContext({});

export default function ContextProvider({children}) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [data, setData] = useState([]);
    const [fechasReservadas, setFechasReservadas] = useState([]);
    /* const [cabañasDisponibles, setCabañasDisponibles] = useState([]); */

  /*   useEffect(()=> {
        axios("data.json")
        .then((res) => setData(res.data));
    },[]); */

    useEffect(() => { 
        fetch('https://cabanas-backend.onrender.com/api/list')
          .then((res) => res.json())
          .then((allCabañas) => {
            setData(allCabañas);
          })
          .catch((error) => console.log(error));
      }, []);
   
    return (
        <Context.Provider value={{startDate, setStartDate, endDate, setEndDate, data, setData, fechasReservadas, setFechasReservadas}}>
            {children}
        </Context.Provider>
    )
}