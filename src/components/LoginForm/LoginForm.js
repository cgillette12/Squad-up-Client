import React, { Component } from 'react'

export default class LoginForm extends Component {


  handleSubmitLogin = ev => {
    ev.preventDefault();
    const {username , Password } = ev.target

  }
  render() {
    return (
      <div>
        <form className='login-form' onClick={this.handleSubmitLogin}>
          <div className='login-wrapper'>
            <label
              className='username'>
              User Name
            </label>
            <input 
              type='text' 
              name='username' 
              required />
            <label 
              className='Password'>
              Password
            </label>
            <input 
              type='password' 
              name='password' 
              required />
            <button type='submit'>Login</button>

          </div>
        </form>
      </div>
    )
  }
}
