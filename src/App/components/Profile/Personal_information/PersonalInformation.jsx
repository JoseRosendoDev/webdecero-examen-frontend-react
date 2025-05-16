import "./personal_information.css";
import { FaEye } from "react-icons/fa";
import { GiWeight, GiBodyHeight } from "react-icons/gi";

/**
 * Componente PersonaInformation
 *
 * Muestra información básica de una persona como color de ojos, peso, altura e imagen,
 * 
 *
 * @component
 * @param {Object} props
 * @param {string} props.username - Nombre del usuario, utilizado como texto alternativo en la imagen.
 * @param {string} props.eyeColor - Color de ojos del usuario.
 * @param {number} props.weight - Peso del usuario en kilogramos.
 * @param {number} props.height - Altura del usuario en centímetros.
 * @param {string} props.image - URL de la imagen del usuario.
 * @returns {JSX.Element} Elemento visual con la información personal del usuario.
 *
 * @example
 * <PersonaInformation
 *   username="José"
 *   eyeColor="Marrón"
 *   weight={72}
 *   height={180}
 *   image="https://example.com/photo.jpg"
 * />
 */
const PersonaInformation = ({ username, eyeColor, weight, height, image }) => {
  return (
    <div className="Personal">
      <div className="PersonalElements">
        <p><FaEye /> Ojos Color: {eyeColor}</p>
        <p><GiWeight /> Peso: {weight} kg</p>
        <p><GiBodyHeight /> Altura: {height} cm</p>
      </div>
      <div className="user-logo">
        <img src={image} alt={`Foto de ${username}`} />
      </div>
    </div>
  );
};

export default PersonaInformation;
