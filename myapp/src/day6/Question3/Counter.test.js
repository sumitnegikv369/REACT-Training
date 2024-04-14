import {screen, render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from './Counter'

test('Counter', () => {
    render(<Counter/>);
    const text = screen.getByText('Count: 0');
    expect(text).toBeInTheDocument();

  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(text.textContent).toBe("Count: 1");

  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(text.textContent).toBe("Count: 0");

  const decrementButton1 = screen.getByText("Decrement");
  fireEvent.click(decrementButton1);
  expect(text.textContent).toBe("Count: -1");
})