import React, { Fragment } from "react";

const Texto = ({consultarApi}) => {
    return ( 
        <Fragment>
            <div className="max-w-xl ">
                <div className='bg-blue-500 rounded-lg'>
                    <h2 className='text-4xl font-serif underline'>Conoce los mejores tragos de Vodka</h2>
                    <p>En esta Pagina de damos la posibilidad de observar los mejores tragos y sus nombres hechos con Vodka,
                        de lo mas consumido en la actulidad.</p>
                </div>
                <button
                    onClick={consultarApi}
                    className='bg-blue-500 w-32 h-8 mt-10 rounded-md from-pink-500'
                >Generar</button>
            </div>  
        </Fragment>       
     );
}
 
export default Texto;