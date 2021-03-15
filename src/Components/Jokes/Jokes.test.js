import { render, screen } from '@testing-library/react';
import Jokes from './Jokes';

test('renders jokes heading', () => {
  render(<Jokes/>);
  const element = screen.getByText(/^Jokes$/i);
  expect(element).toBeInTheDocument();
});
