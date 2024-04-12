import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const Form = () => {
    const [userInfo, setUserInfo] = useState({
        username:"",
        password:""
    })
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Enter User Name"
        value={userInfo.username}
        onChange={(e)=>setUserInfo({...userInfo, username:e.target.value})}
      />
      <TextField
      required
      id="outlined-required"
        label="Required"
        type="password"
        placeholder="Enter User Password"
        autoComplete="current-password"
        value={userInfo.password}
        onChange={(e)=>setUserInfo({...userInfo, password:e.target.value})}
      />
      <Button variant="contained">Send</Button>
    </Box>
  )
}
export default Form
