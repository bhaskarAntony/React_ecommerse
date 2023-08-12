import React from 'react'
import '../styles/register.css'
import { NavLink } from 'react-router-dom'

function Regester() {
  return (
    <div className='container-fluid register p-lg-5'>
       <div className="row m-auto">
        <div className="col-md-12 col-lg-6 offset-md-3">
        <div className="card p-4">
          <h2 className='text-center text-secondary'>Create Account</h2>
          <form action="post">
            <div className="form-group mt-3">
              <label htmlFor="name" className="form-label"><i class="bi bi-person"></i> username</label>
              <input type="text" className="form-control" id='name' placeholder='enter username' />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label"><i class="bi bi-envelope"></i> Email Address</label>
              
              <input type="text" className="form-control" id='email' placeholder='enter email' />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label"><i class="bi bi-key"></i> Password</label>
              <input type="text" className="form-control" id='pwd' placeholder='Create Password' />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label"> <i class="bi bi-key"></i> Confirm Password</label>
              <input type="text" className="form-control" id='c_pwd' placeholder='Confirm Password' />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label"><i class="bi bi-telephone"></i> Mobile</label>
              <input type="text" className="form-control" id='c_pwd' placeholder='enter Mobiel Number' />
            </div>
            <p className='mt-3'>Do have an already Account? <NavLink to={'/login'} className='text-danger'>Login</NavLink></p>
            <div className="form-group mt-3">
              <button type="submit" className="text-white border-0 rounded-2 r-l-btn p-2 w-100 fs-5">Create Account</button>
            </div>
          </form>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Regester
