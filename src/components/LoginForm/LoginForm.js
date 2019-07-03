import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import './LoginForm.css'

export default function LoginForm() {
  return (
    <div className="login">
        <form className="login-form">
          <div className="username-section">
            <Label className="username-label">Username</Label>
            <Input
              id="login-username-input"
              type="text"
              name="username"
              required
            />
          </div>
          <div className="password-section">
            <Label className="password-label">Password</Label>
            <Input
              id="login-password-input"
              type="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
    </div>
  )
}
