import { Fragment } from "react";

const Header = () => {    
    
    return (
        <Fragment>
            <input type="checkbox"  id="btn- " />
            <div id="container-menu">
                <div id="icon-menu">
                    <label htmlFor="btn-menu" >
                        <img className="w-8 h-8 ml-2 cursor-pointer" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-menu-vector-icon-png-image_4236550.jpg" />
                    </label>
                </div>
                <div id="cont-menu">
                    <nav>
                        <a href="https://www.recetasgratis.net/articulo-17-tragos-y-cocteles-con-vodka-faciles-72778.html">Recetas</a>
                        <a href="">Recetas</a>
                        <a href="">Recetas</a>
                    </nav>
                    <label htmlFor="btn-menu">
                        <img className="w-5 h-5" src="https://us.123rf.com/450wm/serz72/serz721508/serz72150800088/44510545-eliminar-signo-blanca-de-trav%C3%A9s-registrarse-en-un-fondo-negro-se%C3%B1al-x-una-se%C3%B1al-de-negaci%C3%B3n-para-ind.jpg" alt="" />
                    </label>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;