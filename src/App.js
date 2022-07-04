import './App.css';
import { useEffect, useState } from 'react';
import Trago from './components/Trago';
import './App.css'

function App() {


  const [bebida, setBebidas] = useState({})

  // Genera un trago alateorio de la lista de tragos
  const generarElementoAleatorio = (lista) =>{
    let indiceAleatorio = Math.floor(Math.random() * lista.length)
    return lista[indiceAleatorio]
  } 
    
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
    if (bebida){
      localStorage.setItem('bebida', JSON.stringify(bebida))
    } else{
      localStorage.setItem('bebida', JSON.stringify([]))
    }

  },[bebida]);
  
  return (
    <div className='frag'>
      <div>
        <h2 className='title'>Conoce los mejores tragos de Vodka</h2>
        <button
        onClick={consultarApi}
        >Generar</button>
      </div>
      <Trago
        bebida={bebida}/>
    </div>
  );
};

export default App;
