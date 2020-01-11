import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
   <nav className="navbar navbar-dark navbar-expand-lg bg-info">
      <div className="navbar-brand">
         Tower IQ App
      </div>

      <ul className="navbar-nav ml-3">
         <li className="nav-item">
            <NavLink to='/' className="nav-link" exact>
               Главная
            </NavLink>
         </li>
         <li className="nav-item">
            <NavLink to='/users' className="nav-link">
               Пользователи
            </NavLink>
         </li>

      </ul>
   </nav>
)