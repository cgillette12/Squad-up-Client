import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom'

export default function RegisterRoute(props) {
  
  const handleRegisterSuccess = () => {
    const {location = {}, history={push: () => {}}} = props;
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  return (
    <div className='register-parent'>
      {TokenService.hasAuthToken()? <Redirect to="/dashboard"/> : <></>}
      <section className='register-section'>
        <h1 className='register-Title'>Sign Up</h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      </section>
    </div>
  ) 
}
