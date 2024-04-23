import { fireEvent, render, screen } from '@testing-library/react'
import Modal from './Modal'

test('modal opens when triggered', () => {
  let isOpen = false

  const renderModal = () => {
    render(
      <Modal
        isOpen={isOpen}
        onClose={() => (isOpen = false)}
        onOpen={() => (isOpen = true)}
      >
        <div>Modal Content</div>
      </Modal>,
    )
  }

  renderModal()

  const menu = screen.getByTestId('menu')
  fireEvent.click(menu)

  renderModal()

  const content = screen.getByText('Modal Content')
  expect(content).toBeInTheDocument()
})
