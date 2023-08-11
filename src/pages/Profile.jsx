import React from 'react'
import '../styles/profile.css'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard';

function Profile() {
  const navigate = useNavigate();
  return (
    <div className='container p-3'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          <div className="card">
            <div className="card-header text-center bg-primary">
              <img src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" alt="" />
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong className='text-primary'>Username: </strong>
                  <p className='float-end text-secondary'>bhaskar babu cm</p>
                </li>
                <li className="list-group-item">
                  <strong className='text-primary'>Email: </strong>
                  <p className='float-end text-secondary'>bhaskar@gmail.com</p>
                </li>
                <li className="list-group-item">
                  <strong className='text-primary'>Phone Number: </strong>
                  <p className='float-end text-secondary'>+91-9606729320</p>
                </li>
               
              </ul>
            </div>
            <div className="card-footer bg-warning">
            <button className="btn border-0 rounded-2 fs-5 bg-black text-white float-start" onClick={()=>navigate('/login')}>Login</button>
            <button className="btn border-0 rounded-2 fs-5 bg-black text-white float-end" onClick={()=>navigate('/register')}>Create Account</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <Dashboard/>
          <div className="row">
            <div className="col-12">
             <div className="card p-2 mt-4">
           <div className="row">
            <div className="col-6">
            <p><strong>Track Your orders</strong></p>
            </div>
            <div className="col-6">
             <button className="btn border-0 rounded-2 bg-primary float-end text-white">Track</button>

            </div>
           </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
