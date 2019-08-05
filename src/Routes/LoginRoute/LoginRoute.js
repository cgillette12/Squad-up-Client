import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function LoginRoute(props) {

  const handleLoginSuccess = () => {
    const {location = {}, history={push: () => {}}} = props;
    console.log(window.innerWidth)
    const destination = (location.state || {}).from || (window.innerWidth <= 800) ? '/games' : '/dashboard'
    history.push(destination)
  }

  return (
    <div className='login-parent'>
      {TokenService.hasAuthToken()? <Redirect to="/dashboard"/> : <></>}
      <section className='login-section'>
        <h1 className='login-Title'>Login</h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </section>
    </div>
  )
}
