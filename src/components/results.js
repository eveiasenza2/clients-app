
import React from 'react';

const Results = ({data, edades}) => {

// obtenemos la fecha de nacimiento

const recorreArray = (data) => {
    for(let i=0; i<=data?.length-1; i++){
    var initialData= data[i];
    var date = new Date(initialData)

    var new_date  = new Date(date);     

    var add_days = Math.floor((Math.random()*60)+1);
    var add_months = Math.floor((Math.random()*13)+1);
    new_date.setDate(new_date.getDate() + add_days);
    new_date.setMonth(new_date.getMonth() + add_months);

//seteo una fecha de muerte aleatoria:
    var deadDate = (new_date.getDate()+'/'+(new_date.getMonth()+1)+'/'+new_date.getFullYear());
    }
   if (deadDate !== undefined) {
    return console.log('Fecha probable de muerte: ' + deadDate)
  }
  }
  recorreArray(data) && console.log(recorreArray(data));
   
  //funcion desviacion estandar de edades
  if (edades !== '' ) {
     function dev(edades){
      let mean = edades?.reduce((acc, curr)=>{
         return acc + curr
       }, 0) / edades?.length;
       
       edades = edades?.map((k)=>{
         return (k - mean) ** 2
       })
       
      let sum = edades?.reduce((acc, curr)=> acc + curr, 0);
      return Math.sqrt(sum / edades?.length)
     }
     
     dev(edades) && console.log('Desviación estandar de edades: ' + dev(edades));
  }
}

export default Results;

