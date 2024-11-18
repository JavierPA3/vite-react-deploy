import { useState } from 'react';
import './Icons.css';
import { Window } from '../window/Window';

export const Icons = ({ image, name, alt }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si la ventana está abierta

  const openApp = () => {
    setIsOpen(true); // Cambia el estado a "abierto"
  };

  return (
    <>  
      <button className="iconButton" onClick={openApp}>
        <img src={image} alt={name} className="iconsPicture" />
        <p className="iconsP">{name}</p>
      </button>

      {isOpen && <Window app={alt} />}
    </>
  );
};
