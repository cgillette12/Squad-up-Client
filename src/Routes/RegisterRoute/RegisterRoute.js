import React, { useState }from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default function RegisterRoute(props) {
   const handleRegisterSuccess = () => {
    const {location = {}, history={push: () => {}}} = props;
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  return (
    <div className='register-parent'>
      <section className='register-section'>
        <h1 className='register-Title'>Register</h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      </section>
    </div>
  ) 
}
