import React from 'react'

import './userEmail.css'

/**
 * Componente UserEmail
 *
 * Muestra la dirección de correo electrónico del usuario.
 *
 * @component
 * @param {Object} props
 * @param {string} props.userEmail - Dirección de correo electrónico del usuario a mostrar.
 * @returns {JSX.Element} Elemento que renderiza el correo electrónico del usuario.
 *
 * @example
 * <UserEmail UserEmail="jose@example.com" />
 */

const UserEmail = ({userEmail}) => {
  return (
    <div className='EmailTitle'>{userEmail}</div>
  )
}

export default UserEmail