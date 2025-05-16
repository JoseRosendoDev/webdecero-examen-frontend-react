import React from 'react'
import './userName.css'

/**
 * Componente FullUserName
 *
 * Renderiza el nombre del usuario
 * 
 *
 * @component
 * @param {Object} props
 * @param {string} props.firstName - Nombre del usuario.
 * @param {string} props.lastName- Apellido del usuario.
 * @returns {JSX.Element} Encabezado con el nombre del usuario.
 *
 * @example
 * <FullUserName userName="José Hernández" />
 */

const FullUserName = ({firstName, lastName}) => {
  return (
    <div className='UserContainer'>
        <h2>{firstName} {lastName}  </h2>
    </div>
  )
}

export default FullUserName;