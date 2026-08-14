// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuantumBase title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuantumBase/i);
    expect(titleElement).toBeInTheDocument();
});
