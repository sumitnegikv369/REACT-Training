import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          backdropFilter: 'blur(2px)',
          margin: '-2rem',
          padding: '2rem',
        }}
      >
        <Box className="boxclass">
          <Typography
            id="modal-modal-title"
            variant="h2"
            color={'white'}
            component="h2"
          >
            MODAL
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'red'}>
            Data Inside Modal
          </Typography>
          <Button
            onClick={handleClose}
            style={{ fontSize: '2rem', fontWeight: 'bolder', color: 'skyblue' }}
          >
            Close modal
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
