import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import './region.css'

/**
 * Componente CityAndCountry
 *
 * Muestra el nombre de una ciudad y su país, incluye el ícono de ubicación.
 * 
 *
 * @component
 * @param {Object} props
 * @param {string} props.City - Nombre de la ciudad.
 * @param {string} props.Country - Nombre del país.
 * @returns {JSX.Element} Elemento visual con ciudad, país y ícono de ubicación.
 *
 * @example
 * <CityAndCountry City="Guadalajara" Country="México" />
 */


const CityAndContry = ({ City, Country}) => {
  return (
    <div>
        <div className='titles'>
          <IoLocationOutline size={20} />   {City}  -  {Country}
        </div>    
    </div>
  )
}

export default CityAndContry