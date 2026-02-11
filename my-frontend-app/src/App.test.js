import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // Extra check for '.toBeInTheDocument()' support

/**
 * Basic Unit Test for React App
 * This test checks if the "learn react" link is present in the document.
 */
test('renders learn react link', () => {
  // App component ko virtual DOM mein render karna
  render(<App />);
  
  // Regex use karke text find karna (case-insensitive)
  const linkElement = screen.getByText(/learn react/i);
  
  // Assertion: Check karna ki element screen par exist karta hai
  expect(linkElement).toBeInTheDocument();
});