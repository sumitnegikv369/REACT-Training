// Modal.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

test('modal opens when triggered', () => {
  let isOpen = false;

  render(
    <Modal isOpen={isOpen}
    onClose={() => isOpen = false}
    onOpen={() => isOpen = true}>
      <div>Modal Content</div>
    </Modal>
  );

  
  fireEvent.click(screen.getByTestId("menu"));


  const content = screen.getByText("Modal Content");
  expect(content).toEqual("Modal Content");
  
});

