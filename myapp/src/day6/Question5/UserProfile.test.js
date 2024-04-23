import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'
import '@testing-library/jest-dom'

test('user profile with props', () => {
  const user = {
    name: 'Sumit',
    email: 'kv369@gmail.com',
    phoneNumber: '9368400015',
  }

  render(<UserProfile {...user} />)

  const name = screen.getByText(/Sumit/i)
  const email = screen.getByText(/kv369@gmail.com/i)
  const phoneNo = screen.getByText(/9368400015/i)

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(phoneNo).toBeInTheDocument()
})
