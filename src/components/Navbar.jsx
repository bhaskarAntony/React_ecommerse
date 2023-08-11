import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

function Navbar() {
    var home = true;
    var order = false;
    var search = false;
    var cart = false;
    var favorate = false;

    const changeIcon = (name) =>{
        home = true;
        order = false;
        search = false;
        cart = false;
        favorate = false;
        name = (!name);
        }
   useEffect(()=>{
   changeIcon()
   }, [])

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
            <NavLink to={'/'} className='navbar-brand fs-1'>Mart<span className='text-warning' onClick={changeIcon(home)}>pro</span></NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between align-items-center" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className='nav-link fs-4 text-white text-md-center' onClick={changeIcon(home)}>
                          {
                            home ?  <i class="bi bi-house-fill"></i> : <i class="bi bi-house"></i>
                          }
                             Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/orders'} className='nav-link fs-4 text-white text-md-center' onClick={changeIcon(order)}><i class="bi bi-basket"></i> Orders</NavLink>
                    </li>
                   
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <NavLink to={'/search'} className='nav-link fs-4 text-white text-md-center' onClick={changeIcon(search)}><i class="bi bi-search"></i> Search</NavLink>
                </li>
                </ul>
               <ul className='navbar-nav align-items-lg-center text-white'>
               <li className="nav-item">
                        <NavLink to={'/cart'} className='nav-link fs-4 text-white text-md-center' onClick={changeIcon(cart)}><i class="bi bi-cart2"></i> Cart</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink to={'/favorate'} className='nav-link fs-4 text-white text-md-center' onClick={changeIcon(favorate)}><i class="bi bi-heart"></i> Favorates</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink to={'/profile'}><i class="bi bi-person-circle fs-1 text-white nav-link text-md-center"></i></NavLink>
                </li>
               </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
