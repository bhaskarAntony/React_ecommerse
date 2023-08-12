import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='container-fluid register p-lg-5'>
    <div className="row m-auto">
     <div className="col-md-12 col-lg-6 offset-md-3">
     <div className="card p-4">
       <h2 className='text-center text-secondary'>Login </h2>
       <form action="post">
         <div className="form-group mt-3">
           <label htmlFor="email" className="form-label"><i class="bi bi-envelope"></i> Email</label>
           
           <input type="text" className="form-control" id='email' placeholder='enter email' />
         </div>
         <div className="form-group mt-3">
           <label htmlFor="email" className="form-label"><i class="bi bi-key"></i> Password</label>
           <input type="text" className="form-control" id='pwd' placeholder='Create Password' />
         </div>
         <p className='mt-3'>You Dont't have an Account? <NavLink to={'/register'} className='text-danger'>Create Account</NavLink></p>
         <div className="form-group mt-3">
           <button type="submit" className="text-white border-0 rounded-2 r-l-btn p-2 w-100 fs-5">Login</button>
         </div>
       </form>
     </div>
     </div>
    </div>
 </div>
  )
}

export default Login
