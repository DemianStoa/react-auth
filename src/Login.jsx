import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login} from './authSlice'

const Login = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogin(e){
        e.preventDefault()
        
        dispatch(login({username,password}))
        navigate("/home")
    }

  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
            <div>
            <label htmlFor='name'>Username: </label>
            <input 
                onChange={e=>setUsername(e.target.value)}
                value={username}
                id="name" type="text"/>
            </div>
            <div>
            <label htmlFor='password'>Password: </label>
            <input 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                id="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login