import React from "react";
import { Fragment } from "react";


const Trago = ({bebida}) => {
    return ( 
        <Fragment>
            <img src={bebida.strDrinkThumb} width='300px' /> 
            <h3> Nombre: {bebida.strDrink}</h3>
        </Fragment>
     );
}
 
export default Trago;