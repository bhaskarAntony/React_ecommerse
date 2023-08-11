import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
  return (
    <div className='overflow-hidden'>
        <h2>DashBoard</h2>
            <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="items card m-2">
                <div className="card-header">
                  <h3>Carts</h3>
                </div>
                <div className="card-body">
                  <strong>Carts:</strong>
                  <p>10 Products</p>
                </div>
                <div className="card-footer">
                  <button className="btn border-0 rounded-2 bg-warning w-100" onClick={()=>navigate('/cart')}>View Carts</button>
                </div>
              </div>
           </div>
           <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="items card m-2">
                <div className="card-header">
                  <h3>Favorates</h3>
                </div>
                <div className="card-body">
                  <strong>favorates:</strong>
                  <p>16 Products</p>
                </div>
                <div className="card-footer">
                  <button className="btn border-0 rounded-2 bg-warning w-100" onClick={()=>navigate('/favorate')}>View Favorates</button>
                </div>
              </div>
           </div>
           <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="items card m-2">
                <div className="card-header">
                  <h3>Orders</h3>
                </div>
                <div className="card-body">
                  <strong>orders:</strong>
                  <p>2 Products</p>
                </div>
                <div className="card-footer">
                  <button className="btn border-0 rounded-2 bg-warning w-100" onClick={()=>navigate('/orders')}>View Orders</button>
                </div>
              </div>
           </div>
          </div>
    </div>
  )
}

export default Dashboard
