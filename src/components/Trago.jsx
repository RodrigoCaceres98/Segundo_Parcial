import React from "react";
import { Fragment } from "react";


const Trago = ({bebida}) => {
    return ( 
        <Fragment>
            <div className=""><h3 className="text-2xl  text-white top-1.5"> Nombre: {bebida.strDrink}</h3></div>
            <img src={bebida.strDrinkThumb} width='350px' /> 
        </Fragment>
     );
}
 
export default Trago;