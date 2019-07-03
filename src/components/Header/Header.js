import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'
import UserContext from '../../contexts/UserContext';

export default function Header() {
  const user = useContext(UserContext)
  
  const handleLogoutClick = () => {
    TokenService.clearAuthToken()
    user.clearUser()
  }

  const renderLogoutLink = () => {
    return (
      <div className='Header__logged-in'>
        <Link to=''>Name + Avatar</Link>
        <Link onClick={handleLogoutClick} to='/'>Logout</Link>
      </div>
    )
  }

  const renderLoginLink = () => {
    return (
      <div className='Header__logged-out'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }

  return (
    <header className='Header'>
      <h1 className='Header__brand'>
        <Link to='/'>
          Squad Up
        </Link>
      </h1>
      <nav className='Header__nav'>
        {TokenService.hasAuthToken()
          ? renderLogoutLink()
          : renderLoginLink()
        }
      </nav>
    </header>
  )
}