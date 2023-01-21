import React, {useState} from 'react';
import db from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { CustomButton, CustomInput , CustomForm, Title} from '../styles/globalStyles';

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')


    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db,'users'),{
            nombre:nombre,
            apellido: apellido,
            edad:edad,
            fechaNacimiento:fechaNacimiento
           });  
     } catch(error){
         console.log(error);
    }
        setNombre('');
        setApellido('');
        setEdad('');
        setFechaNacimiento('');
    }

    return (
        <>
            <Title>Creación de Cliente</Title>
            <CustomForm action="" onSubmit={onSubmit}>
                <div>
                    <CustomInput type="text" 
                    placeholder="Nombre" 
                    className="form-control" 
                    value={nombre}
                    required
                    onChange={(e)=>{setNombre(e.target.value)}} 
                    name="nombre"/>
                </div>
                <div>
                 <CustomInput type="text" 
                    placeholder="Apellido" 
                    className="form-control" 
                    value={apellido}
                    required
                    onChange={(e)=>{setApellido(e.target.value)}} 
                    name="apellido"/>
                </div>
                <div>
                 <CustomInput type="number" 
                    placeholder="Edad" 
                    className="form-control" 
                    value={edad}
                    required
                    onChange={(e)=>{setEdad(e.target.value)}} 
                    name="edad"/>
                </div>
                <div>
                 <CustomInput type="date" 
                    placeholder="Fecha de nacimiento" 
                    className="form-control" 
                    value={fechaNacimiento}
                    required
                    onChange={(e)=>{setFechaNacimiento(e.target.value)}} 
                    name="fecha de nacimiento"/>
                </div>
           {(nombre && fechaNacimiento && edad && apellido !== '') ? <CustomButton type="submit">Enviar</CustomButton> : <CustomButton disabled>Enviar</CustomButton>  }
            </CustomForm>
        </>
    );
}
 
export default Form;