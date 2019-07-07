import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function LoginRoute(props) {

  const handleLoginSuccess = () => {
    const {location = {}, history={push: () => {}}} = props;
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  return (
    <div className='login-parent'>
      <section className='login-section'>
        <h1 className='login-Title'>Login</h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </section>
    </div>
  )
}
