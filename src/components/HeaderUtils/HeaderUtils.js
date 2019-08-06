import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './HeaderUtils.css'

export function SideNavButton(props) {
  const [dropDownToggled, setDropDownToggled] = useState(false)

  const handleDropdownToggle = () => {
    dropDownToggled ? setDropDownToggled(false) : setDropDownToggled(true)
  }

  return (
    <div
      className={`SideNav-button 
    ${dropDownToggled && 'active'}`}
      onClick={() => handleDropdownToggle()}
    >
      <section className="nav-dropdown-button">
        <div className="SideNav-button-line" />
        <div className="SideNav-button-line" />
        <div className="SideNav-button-line" />
      </section>
      <SideNavDrawer
        active={dropDownToggled}
        handleLogoutClick={props.handleLogoutClick}
      />
    </div>
  )
}

export function SideNavDrawer(props) {
  const userContext = useContext(UserContext)
  const handleLogoutClick = () => {
    TokenService.clearAuthToken()
    userContext.processLogout()
  }

  const renderLogoutLink = () => {
    return (
      <div className="nav__logged-in">
        <li>
          <Link to="/games">Home</Link>
        </li>
        <li>
          <Link to="/squads">Squads</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <Link onClick={handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    )
  }

  const renderLoginLink = () => {
    return (
      <div className="nav-login">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
  return (
    <nav className={`side-drawer ${props.active && 'active'}`}>
      <ul>
        {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
      </ul>
    </nav>
  )
}
