import React, { useEffect , useState} from 'react';
import db from '../firebaseConfig';
import {collection, onSnapshot} from 'firebase/firestore';
import { Title } from '../styles/globalStyles';
import Results from './results';

const List = () => {
const [infoClients, setInfoClients] = useState([]);

// listar los atributos de cada cliente que estan guardados en la base de datos
useEffect(() => {
    const doFetch = async () => {
     await onSnapshot(collection(db,'users'), 
        (snapshot)=>{
            const clients = snapshot.docs.map((item) => {  
           return {...item.data()}
         });
         setInfoClients(clients);
        })}
        doFetch()
        .catch((err) => {
            console.error("failed to fetch data", err);
          });
    },[]);   


    const data =  infoClients?.map((i) => {
        return  i.fechaNacimiento
    });
    
    // calcular promedio de edades en consola
     let values = infoClients?.map((val) => {
         return (parseFloat(val?.edad));
     });

     if (values.length >= 1) {
      let sum = values?.reduce((previous, current) => current += previous);
      let promedio = sum / values.length;

     console.log(promedio,'PROMEDIO DE EDADES')
    };


  return (
    <>
    <Title>Lista de Clientes</Title>
    {infoClients?.map((i) => (
        <ul>
            <li>Nombre: {i.nombre} {i.apellido}</li>
            <li>Edad: {i.edad}</li>
            <li>Fecha de nacimiento: {i.fechaNacimiento}</li>
        </ul>
    ))}
    <Results data={data}/>
    </>
  );
}
 
export default List;

