
import React from 'react';

const Results = ({data}) => {

// obtenemos la fecha de nacimiento

const recorreArray = (data) => {
    for(let i=0; i<=data?.length-1; i++){
    var date = new Date(data[i]);
    console.log(date,'HOLAAA')
    var new_date = new Date(date);
    var add_days = Math.floor((Math.random()*60)+1);
    var add_months = Math.floor((Math.random()*13)+1);
    new_date.setDate(date.getDate() + add_days);
    new_date.setMonth(new_date.getMonth() + add_months);

//seteo una fecha de muerte aleatoria:
var deadDate = (new_date.getFullYear()+'/'+(new_date.getMonth()+1)+'/'+new_date.getDate());
    }
    console.log('fecha probable de muerte ' + deadDate)
  }
  console.log(recorreArray(data));


   
    //funcion desviacion estandar de edades
  //   function dev(infoClients){

  //     let mean = infoClients?.reduce((acc, curr)=>{
  //       return acc + curr
  //     }, 0) / infoClients?.length;
       
  //     infoClients = infoClients?.map((k)=>{
  //       return (k - mean) ** 2
  //     })
       
  //    let sum = infoClients?.reduce((acc, curr)=> acc + curr, 0);
  //    return Math.sqrt(sum / infoClients.length)
  //   }
     

  // if (infoClients !== "") {
  //     console.log(dev());
  // }
 

  return (
    <></>
     )
}

export default Results;

