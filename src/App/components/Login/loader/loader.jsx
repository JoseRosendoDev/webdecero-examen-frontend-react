import React from 'react'

/**
 * 
 * Componente Loader
 * 
 * Renderiza un icono de cargar (Spinner Circular) animado, utilizado para indicar que algo esta en proceso
 * 
 * @returns {JSX.Element} Elemento JSX que representa un loader animado
 * 
 * @example
 * 
 * // Uso tipico dentro de un componente mientras se espera una peticion
 *
 * return(
 * <div>
 *     <Loader />
 * </div> 
 * 
 * );
 */
function Loader(){

    return(
        <>
        <div className="loaderIcon"></div>
        <style jsx>
        {`
        .loaderIcon{
            border: 10px solid #f3f3f3;
            border-radius: 50%;
            border-top: 10px solid #EA4D88;
            width: 60px;
            height: 60px;
            animation: spin 2s linear infinite;
        }
        @keyframes spin{
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
        }
        `}
        </style>
        </>
    )
}

export default Loader;