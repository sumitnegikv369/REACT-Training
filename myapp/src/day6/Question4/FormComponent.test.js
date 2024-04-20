import { fireEvent, render, screen } from '@testing-library/react'
import FormComponent from './FormComponent'

test('form', () => {
  render(<FormComponent />)
  const usernameInput = screen.getByTestId('username')
  fireEvent.change(usernameInput, { target: { value: 'sumit' } })
  expect(usernameInput.value).toBe('sumit')

  const passwordInput = screen.getByTestId('password')
  fireEvent.change(passwordInput, { target: { value: '123' } })
  expect(passwordInput.value).toBe('123')

  const submitButton = screen.getByText('Submit')
  fireEvent.submit(submitButton)

  const resultUsername = screen.getByTestId('resultUsername')
  const resultPassword = screen.getByTestId('resultPassword')

  expect({
    username: resultUsername.textContent,
    password: resultPassword.textContent,
  }).toEqual({
    username: usernameInput.value,
    password: passwordInput.value,
  })
})
