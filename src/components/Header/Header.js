import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {SideNavButton} from '../HeaderUtils/HeaderUtils'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

export default function Header() {
  const userContext = useContext(UserContext)
  
  const handleLogoutClick = () => {
    TokenService.clearAuthToken()
    userContext.processLogout()
  }

  const renderLogoutLink = () => {
    return (
      <div className='Header__logged-in'>
        <img className='Header__user-avatar' src={userContext.user.avatar} alt=" " aria-label="User Avatar" />
        <Link to='/dashboard'>{userContext.user.name}</Link>
        <Link onClick={handleLogoutClick} to='/'>Logout</Link>
      </div>
    )
  }

  const renderLoginLink = () => {
    return (
      <div className='Header__logged-out'>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }

  return (
    <header className='Header'>
      <h1 className='Header__brand'>
        {TokenService.hasAuthToken() ? 
        <Link to="/dashboard">
          SquadUp
        </Link> :
        <Link to='/'>
          SquadUp
        </Link>
      }
          
      </h1>
      <nav className='Header__nav'>
        {TokenService.hasAuthToken()
          ? renderLogoutLink()
          : renderLoginLink()
        }
      </nav>
      <SideNavButton handleLogoutClick={handleLogoutClick} />
    </header>
  )
}
