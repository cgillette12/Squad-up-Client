import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function LoginRoute() {
    return (
      <div className='login-parent'>
        <section className='login-section'>
          <h1 className='login-Title'>Login</h1>
          <LoginForm/>
        </section>
      </div>
    ) 
}
