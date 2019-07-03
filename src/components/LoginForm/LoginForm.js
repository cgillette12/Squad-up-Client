import React, { useState, useEffect, useContext, useRef } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import './LoginForm.css'

export default function LoginForm(props) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { onLoginSuccess = () => { } } = props;
  const context = useContext(UserContext);

  const firstInput = useRef(null)
  console.log(firstInput)

  const handlesubmit = e => {
    e.preventDefault()

    AuthApiService.postLogin({
      username: user,
      password: password,
    })
      .then(res => {
        setUser('')
        setPassword('')
        context.processLogin(res.authToken)
        onLoginSuccess()
      })
      .catch(res => {
        setError(res.error)
      })
  }

  useEffect(() => {
    firstInput.current.focus();
  });

  return (
    <div className="login">
      <div className="login-wrapper">
        <form
          className="login-form"
          onSubmit={handlesubmit}
        >
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
          <div className="username-section">
            <Label className="username">Username</Label>
            <Input
              id="login-username-input"
              type="text"
              name="username"
              value={user}
              ref = {firstInput}
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
              value={password}
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
