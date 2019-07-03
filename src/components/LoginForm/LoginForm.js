import React, { useState, useEffect } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import './LoginForm.css'

export default function LoginForm() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handlesubmit = e => {
    e.preventDefault()

    AuthApiService.postLogin({
      username: user,
      password: password,
    })
      .then(res => {
        user = ''
        password = ''
        
      })
      
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <form
          className="login-form"
          onSubmit={handlesubmit}
        >
          <div className="username-section">
            <Label className="username">Username</Label>
            <Input
              id="login-username-input"
              type="text"
              name="username"
              onChange={e => setUser(e.target.value)}
              required
            />
          </div>
          <div className="password-section">
            <Label className="password">Password</Label>
            <Input
              id="login-password-input"
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
