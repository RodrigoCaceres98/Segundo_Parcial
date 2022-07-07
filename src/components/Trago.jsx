import React from "react";
import { Fragment } from "react";


const Trago = ({bebida}) => {
    return ( 
        <Fragment>
            <div className="max-w-sm h-auto border-double border-4 border-sky-500 rounded-lg flex-col ">
                <h3 className="text-2xl bg-blue-500  underline"> Nombre: {bebida.strDrink}</h3>
                <img  src={bebida.strDrinkThumb} width='384xp' /> 
            </div>
        </Fragment>
     );
}
 
export default Trago;