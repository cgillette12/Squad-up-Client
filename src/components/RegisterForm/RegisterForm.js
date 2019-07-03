import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import './RegisterForm.css';


export default function RegisterForm() {

  const handleSelectAvitar = () => {
    // will display all Avitars
  }
  return (
    <div className="register">
        <form className="register-form">
          <div className="username-section">
            <Label className="username">Username</Label>
            <Input
              id="register-username-input"
              type="text"
              name="username"
              required
            />
          </div>
          <div className="name-section">
            <Label className="name">Name</Label>
            <Input
              id="register-name-input"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="password-section">
            <Label className="password">Password</Label>
            <Input
              id="register-password-input"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="avatar-section">
            <Label className="avatar">Select Avitar</Label>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
  )
}
