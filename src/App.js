import './App.css';
import { useEffect, useState } from 'react';
import Trago from './components/Trago';
import './App.css'

function App() {
  
  // cambiando a formato JSON
  let tragosIniciales = JSON.parse(localStorage.getItem('bebida'));

  //HOOK: para las bebidas
  const [bebida, setBebidas] = useState({tragosIniciales})

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
      localStorage.setItem('bebida', JSON.stringify(bebida)) // stringify: cambia el tipo a string
    } else{
      localStorage.setItem('bebida', JSON.stringify([]))
    };
    console.log(bebida.strDrink)
  },[]); // dentro de los [] va la variable que esta siendo monitoreada 
   
  return (
    <div className='flex justify-around mt-44'>
      <div className='mt-24'>
        <div className='bg-blue-500 rounded-lg '><h2 className='text-5xl font-serif'>Conoce los mejores tragos de Vodka</h2></div>
        <button
        onClick={consultarApi}
        className='bg-blue-500 w-32 h-8 mt-10 rounded-md'
        >Generar</button>
      </div>
      <div>
        <Trago
          bebida={bebida}/>
      </div>
    </div>
  );
};

export default App;
