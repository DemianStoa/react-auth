import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './authSlice'

const Home = () => {
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

 function handleClick() {
    dispatch(logout())
    
 }
 

  useEffect(()=>{
    console.log(user)
   if(user?.username==''){
    navigate('/')
   }
  },[user])
  return (
    <div>
    <h1>Welcome</h1>
    <button 
        onClick={handleClick}
    >logout</button>
    </div>

  )
}

export default Home