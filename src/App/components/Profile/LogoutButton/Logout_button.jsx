import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import './logout_button.css'

/**
 * Componente LogoutButton
 *
 * Botón de cierre de sesión. Elimina el `token` y `refreshToken` del `localStorage` y redirige al usuario a la pantalla principal.
 * Incluye un ícono de apagado.
 * Incluye un loader
 *
 * @component
 * @returns {JSX.Element} Botón para cerrar sesión y redirigir al inicio.
 *
 * @example
 * <LogoutButton />
 */


const LogoutButton = () => {
const navigate = useNavigate();
const [isLoading, setLoading] = useState(null);
const onPressed = () => {
   
    setLoading(true);
   
    setTimeout(() => {
      handleLogout()
    }, 2000);
}
const handleLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    setLoading(false);
    navigate('/')
}

  return (
    <button className='logout_button' onClick={onPressed} type="button">
      {isLoading? <span className="loader"></span> : <FaPowerOff size={25} />} 
    </button>
  )
}

export default LogoutButton