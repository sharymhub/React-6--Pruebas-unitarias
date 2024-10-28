import { render, screen } from '@testing-library/react';
import App from './App';

test('rederiza que el boton verifica que el texto cambie correctamente.', () => {
  render(<App />);
  const BotonElement = screen.getByText("Hacer clic aquí");
  expect(BotonElement).toBeInTheDocument();
});