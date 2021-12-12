import { render, screen } from '@testing-library/react';
import App from './App';

test('renders response connect with express', async () => {
  render(<App />);
  const textConnectedToExpress = screen.getByText('Test here');
  expect(textConnectedToExpress).toBeInTheDocument();
});
