import React from 'react'

/**
 * Componente InputWithPrefix
 *
 * Campo de entrada reutilizable que incluye un espacio (prefijo visual) a la izquierda del input,
 * útil para íconos u otros elementos decorativos. Soporta errores y es compatible con `ref` mediante `forwardRef`.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.type='text'] - Tipo de input (`text`, `email`, `password`, etc.).
 * @param {string} [props.placeholder] - Texto que se muestra como placeholder dentro del input.
 * @param {string} [props.error] - Mensaje de error a mostrar debajo del input.
 * @param {React.Ref<HTMLInputElement>} ref - Referencia al elemento input para control externo.
 * @returns {JSX.Element} Campo de entrada con prefijo visual y soporte de error.
 *
 * @example
 * <InputWithPrefix
 *   type="email"
 *   placeholder="Correo electrónico"
 *   error="Correo no válido"
 *   ref={inputRef}
 * />
 */

const InputWithPrefix = React.forwardRef(({ type = 'text', placeholder, error, ...rest }, ref) => {
  return (



    <div className='input-container'>
      <div className='wrapper'>
        <div className='input-prefix'></div>
        <input
          ref={ref}
          {...rest}
          className='LoginInput'
          type={type}
          placeholder={placeholder}

        />
      </div>
      {error && <span className='error-message'>{error}</span>}
    </div>
  )
});

export default InputWithPrefix;
