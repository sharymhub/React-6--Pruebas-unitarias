import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

test('verifica que el botón cambia el texto al hacer clic', () => {

  const { getByText } = render(<Boton/>);

  const boton = getByText("Hacer clic aquí");
  expect(boton).toBeInTheDocument();

  fireEvent.click(boton);

  const botonActualizado = getByText("¡Gracias por hacer clic!");
  expect(botonActualizado).toBeInTheDocument();
});