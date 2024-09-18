import { render, screen } from '@testing-library/react';
import  Home from './pages/home/Home';

test('renders', () => {
  render(<Home />);
  const linkElement = screen.getByText(/stocks/i);
  expect(linkElement).toBeInTheDocument();
});
