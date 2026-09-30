import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CV header and title', () => {
  render(<App />);
  const nameElement = screen.getByText(/ABDELRAHMAN MOHAMED/i);
  expect(nameElement).toBeInTheDocument();
  const titleElements = screen.getAllByText(/FULL STACK WEB & MOBILE DEVELOPER/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
