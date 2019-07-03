import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default function RegisterRoute() {
  return (
    <div className='register-parent'>
      <section className='register-section'>
        <h1 className='register-Title'>Register</h1>
        <RegisterForm />
      </section>
    </div>
  ) 
}
