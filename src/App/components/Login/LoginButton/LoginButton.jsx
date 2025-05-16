import React from 'react';
import './LoginButton.css';
/**
 * Componente LoginButton
 *
 * Botón reutilizable para autenticación. Puede mostrar un estado de carga si `isLoading` está activo.
 *
 * @component
 * @param {Object} props
 * @param {() => void} props.onClick - Función que se ejecuta al hacer clic en el botón.
 * @param {boolean} props.isLoading - Si es `true`, muestra un loader en lugar del texto del botón y lo desactiva.
 * @returns {JSX.Element} Botón de autenticación con soporte de carga.
 *
 * @example
 * <LoginButton
 *   onClick={handleLogin}
 *   isLoading={authenticating}
 * />
 */

const LoginButton = ({ onClick, isLoading }) => {
  return (
    <div className="wrapper">
      <button 
      type='submit'
        onClick={onClick} 
        className="login login-submit login-button" 
        disabled={isLoading} 
      >
        {isLoading ? <span className="loader"></span> : "AUTENTICAR"}
      </button>
    </div>
  );
};

export default LoginButton;
