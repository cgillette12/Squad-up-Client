import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../context/UserContext';

import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext;

  render() {
    return (
      <div className='login'>
        <div className='login-wrapper'>
          <form className='login-form'>
            <div className='username-section'>
              <label className='username'>Username</label>
              <input
                id='login-username-input'
                type='text'
                name='username'
                required />
            </div>
            <div className='password-section'>
              <label
                className='password'>
                Password
              </label>
              <input
                id='login-password-input'
                type='password'
                name='password'
                required />
            </div>
            <button type='submit' className='Login-button'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}
