import React, { useState } from 'react';

const Boton = () => {
  const [texto, setTexto] = useState("Hacer clic aquí");

  const manejarClic = () => {
    setTexto("¡Gracias por hacer clic!");
  };

  return <button onClick={manejarClic}>{texto}</button>;
};

export default Boton;