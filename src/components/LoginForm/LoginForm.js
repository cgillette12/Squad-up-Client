import React, { useState, useContext } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input } from '../../components/FormUtils/FormUtils'
import './LoginForm.css'

export default function LoginForm(props) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { onLoginSuccess = () => { } } = props;
  const context = useContext(UserContext);

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

  return (
        <form
          className="login-form"
          onSubmit={handlesubmit}
        >
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
            <Input
              id="login-username-input"
              type="text"
              name="username"
              placeholder='username'
              value={user}
              onChange={e => setUser(e.target.value)}
              aria-label='username'
              autoFocus
              required
            />
            <Input
              id="login-password-input"
              type="password"
              name="password"
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              aria-label='password'
              required
            />
          <button type="submit" className="login-button">
            Login
          </button>
    </form>
  )
}
