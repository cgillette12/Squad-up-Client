import React, { Component } from 'react'
import { Input, Label } from '../FormUtils/FormUtils'
import './LoginForm.css'

export default class LoginForm extends Component {
  handleSubmitLogin = ev => {
    ev.preventDefault();
    const { username, Password } = ev.target

  }
  render() {
    return (
      <div className='login'>
        <div className='login-wrapper'>
          <form className='login-form' onClick={this.handleSubmitLogin}>
            <div className='username-section'>
              <Label
                className='username'>
                Username
              </Label>
              <Input
                id='login-username-input'
                type='text'
                name='username'
                required />
            </div>
            <div className='Password-section'>
              <Label
                className='Password'>
                Password
              </Label>
              <Input
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
