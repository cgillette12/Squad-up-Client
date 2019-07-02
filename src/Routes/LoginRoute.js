import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
export default class LoginRoute extends Component {
  render() {
    return (
      <div className='Login-parent'>
        <section className='login-section'>
          <h1 className='Login-Title'>Login</h1>
          <LoginForm />
        </section>
      </div>
    )
  }
}
