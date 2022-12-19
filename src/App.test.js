/*
     elaborado: Leonel Anthony Herrera Orosco
     fecha: Diciembre, 2022
     referencia: https://www.youtube.com/watch?v=kJv5sxaGCMg&ab_channel=CarlosAlbertoTombePosso
*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
