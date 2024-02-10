import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/auth';
export default function Register() {
  const {register} =useAuthStore()
  const navigate = useNavigate()
  const [full_name,setFullname] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
    const save= async(e)=>{
      e.preventDefault()
       await register({
        full_name:full_name,
        username:username,
        password:password
      })
      let token = localStorage.getItem("token")
      if (token) {
        navigate("/login")
      }
    }
  const active = Boolean(full_name) &&  Boolean(username) && Boolean(password)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className='text-center'>Register</h1>
              </div>
              <div className="card-body">
                <form id='register' onSubmit={save}>
                  <input type="text" onChange={(e)=>setFullname(e.target.value)} placeholder='Full name...' className='form-control my-2' />
                  <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='Username...' className='form-control my-2' />
                  <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password...' className='form-control my-2' />
                </form>
              </div>
              <div className="card-footer">
                <button type='submit' form='register' disabled={!active} className='btn btn-info'>Register</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
