import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from './Wrapper'

function Authenticate() {
    const {auth} = useContext(MyContext);
    return auth.username==="sumit" && auth.password==="123" ? <Outlet /> : <Navigate to='/login' />
}

export default Authenticate