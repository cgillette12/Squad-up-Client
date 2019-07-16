import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderUtils.css'

export  function SideNavButton(props) {

  const [dropDownToggled, setDropDownToggled] = useState(false)

  const handleDropdownToggle = () => {
    dropDownToggled ? setDropDownToggled(false) : setDropDownToggled(true);
  }

  return (
    <div className={`SideNav-button 
    ${dropDownToggled && 'active'}`}
      onClick={() => handleDropdownToggle()}>
      <section className='nav-dropdown-button'>
        <div className='SideNav-button-line' />
        <div className='SideNav-button-line' />
        <div className='SideNav-button-line' />
      </section>
      <SideNavDrawer active={dropDownToggled} handleLogoutClick={props.handleLogoutClick} />
    </div >
  )
}


export function SideNavDrawer(props) {
  return (
    <nav className={`side-drawer ${props.active && 'active'}`}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/squads">
            Squads
          </Link>
        </li>
        <li>
          <Link to="/chat">
            Chat
          </Link>
        </li>
        <li>
          <Link to="/Login">
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={props.handleLogoutClick}
            to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  )
}
