import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/auth';
export default function Login() {
  const {login} =useAuthStore()
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
    const save= async(e)=>{
      e.preventDefault()
       await login({
        username:username,
        password:password
      })
      let token = localStorage.getItem("token")
      if (token) {
        navigate("/main")
      }
    }
  const active = Boolean(username) && Boolean(password)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className='text-center'>Login</h1>
              </div>
              <div className="card-body">
                <form id='login' onSubmit={save}>
                   <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='Username...' className='form-control my-2' />
                  <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password...' className='form-control my-2' />
                </form>
              </div>
              <div className="card-footer">
                <button type='submit' form='login' disabled={!active} className='btn btn-info'>Login</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
