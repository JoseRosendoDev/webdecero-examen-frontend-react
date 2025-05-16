import React from 'react'
import './info_group.css'

/**
 * Componente InfoGroup
 *
 * Muestra un bloque de información con un título y un subtítulo.
 *
 * @component
 * @param {Object} props
 * @param {string} props.Title - Título principal del grupo de información.
 * @param {string} props.Subtitle - Subtítulo o descripción complementaria.
 * @returns {JSX.Element} Grupo de información con título y subtítulo estilizados.
 *
 * @example
 * <InfoGroup
 *   Title="Nombre del Usuario"
 *   Subtitle="José Hernández"
 * />
 */


const InfoGroup = ({Title, Subtitle}) => {
  return (
    <div className='Group'>
        <div className='GroupTitle'>{Title}</div>
        <div className='GroupSubtitle'>{Subtitle}</div>
    </div>
  )
}

export default InfoGroup;
