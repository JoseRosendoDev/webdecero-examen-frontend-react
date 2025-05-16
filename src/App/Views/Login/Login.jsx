// Insert your imports there
import { useForm, SubmitHandler } from "react-hook-form"
import LoginButton from '../../components/Login/LoginButton/LoginButton';
import LoginInputPrefix from '../../components/Login/LoginInputs/LoginInputPrefix'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './login.css'
const Login = () => {

  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/profile')
    }
  },);




  const onSubmit = (data) => {
    setApiError('');
    setIsLoading(true);
    let user = data.usuario;
    let pass = data.password;

    setTimeout(() => {
      sendData(user, pass)
    }, 2000);


  }

  const sendData = (user, pass) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user,
        password: pass,
        expiresInMins: 30,
      }),
    }).then(res => res.json())
      .then(res => {
        if (res.message) {
          throw new Error('Credenciales incorrectas');
        }

        localStorage.setItem('token', res.accessToken,)
        localStorage.setItem('refreshToken', res.refreshToken);

        navigate("/profile");
      }).catch(error => setApiError(error.message))
      .finally(() => setIsLoading(false));


  }

  return (

    <div className="login-card">
      <form>
        <LoginInputPrefix
          error={errors.usuario?.message}
          type='text'
          placeholder="Usuario"

          {...register(
            'usuario',
            {
              required: 'El usuario es obligatorio',
              minLength: {
                value: 6,
                message: 'Minimo 6 caracteres',
              },
            }
          )}
        />

        <LoginInputPrefix
          error={errors.password?.message}
          type='password'
          placeholder="Contraseña"
          {...register(
            'password',
            {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'Minimo 6 caracteres',
              },
            }
          )}
        />

        <LoginButton onClick={handleSubmit(onSubmit)} isLoading={isLoading} />
        {apiError && <p className="error-message">{apiError}</p>}
      </form>
    </div>
  );
}

export default Login;