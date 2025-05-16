import React from 'react'
import { useNavigate  } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import './logout_button.css'

/**
 * Componente LogoutButton
 *
 * Botón de cierre de sesión. Elimina el `token` y `refreshToken` del `localStorage` y redirige al usuario a la pantalla principal.
 * Incluye un ícono de apagado.
 *
 * @component
 * @returns {JSX.Element} Botón para cerrar sesión y redirigir al inicio.
 *
 * @example
 * <LogoutButton />
 */


const LogoutButton = () => {
const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/')
    }

  return (
    <button className='logout_button' onClick={handleLogout} type="button">
        <FaPowerOff size={25} />
    </button>
  )
}

export default LogoutButton