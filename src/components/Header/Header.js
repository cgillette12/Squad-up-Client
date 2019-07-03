import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    // 
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link to=''>Name + Avatar</Link>
        <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__logged-in'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }

  render() {
    return (
      <header className='Header'>
        <h1 className='Header__brand'>
          <Link to='/'>
            Squad Up
          </Link>
        </h1>
        <nav className='Header__nav'>
          {this.renderLogoutLink()}
        </nav>
      </header>
    )
  }
}
