import React, {useState} from 'react';
import db from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();

        addDoc(collection(db,'users'),{
            nombre:'Eve',
            apellido: 'Iasenza'
        });
    }

    return (
        <>
            <h1>Formulario</h1>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <input type="text" 
                    placeholder="Nombre" 
                    className="form-control" 
                    value={nombre}
                    onChange={(e)=>{setNombre(e.target.value)}} 
                    name="nombre"/>
                </div>
                <div>
                 <input type="text" 
                    placeholder="Apellido" 
                    className="form-control" 
                    value={apellido}
                    onChange={(e)=>{setApellido(e.target.value)}} 
                    name="apellido"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
 
export default Form;