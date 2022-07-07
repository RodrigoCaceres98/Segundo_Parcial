import './App.css';
import { Fragment, useEffect, useState } from 'react';
import Trago from './components/Trago';
import Texto from './components/Texto';
import Header from './components/Header';

function App() {
  
  // cambiando a formato JSON
  let tragosIniciales = JSON.parse(localStorage.getItem('bebida'));

  //HOOK: para las bebidas
  const [bebida, setBebidas] = useState(tragosIniciales)

  // Genera un trago alateorio de la lista de tragos
  const generarElementoAleatorio = (lista) =>{
    let indiceAleatorio = Math.floor(Math.random() * lista.length)
    return lista[indiceAleatorio]
  } 
  
  if(!tragosIniciales){
    tragosIniciales = []
  };

  //Funbcion para consultar a la api y traer informacion
  const consultarApi = async () => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
      const bebida = await api.json();
      setBebidas(generarElementoAleatorio(bebida.drinks));
    } catch (error){
      console.log(error);
    }
  };

  useEffect (() =>{
      // Codigo que se ejecuta cuando cambia el estado de la variable 
    if (tragosIniciales){
      localStorage.setItem('bebida', JSON.stringify(bebida)); // stringify: cambia el tipo a string
    } else{
      localStorage.setItem('bebida', JSON.stringify([]))
    };
    console.log(bebida)
  },[tragosIniciales]); // dentro de los [] va la variable que esta siendo monitoreada 
   
  return (
    <Fragment>
      
      <div  id='pantalla' className='flex justify-around mt-44'>
        <div className='mt-20'>
          <Texto
            consultarApi={consultarApi}/>
        </div>
        <div>
          <Trago
            bebida={bebida}/>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
