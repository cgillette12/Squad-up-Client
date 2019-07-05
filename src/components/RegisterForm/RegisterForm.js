import React, { useState, useContext, useEffect } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import './RegisterForm.css';


export default function RegisterForm(props) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { onRegisterSuccess = () => { } } = props;

  const context = useContext(UserContext);

  const handleNewUserSubmit = e => {
    e.preventDefault()

    setError( null )
    AuthApiService.postUser({
      user_name: userName,
      name: name,
      password: password
    })
      .then(user => {
        setUserName('')
        setName('')
        setPassword('')
        onRegisterSuccess()
        context.onRegistrationSuccess()
      })
      .catch(res => {
        setError(res.error)
      })
  }
  const handleSelectAvitar = () => {
    // will display all Avitars
  }
  return (
    <div className="register">
      <form className="register-form" onSubmit={handleNewUserSubmit}>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <Input
          onChange={e => setName(e.target.value)}
          id="register-name-input"
          type="text"
          name="name"
          placeholder='Name'
          aria-label='name'
          required
        />
        <Input
          onChange={e => setUserName(e.target.value)}
          id="register-username-input"
          type="text"
          name="username"
          aria-label='username'
          placeholder='Username'
          required
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          id="register-password-input"
          type="password"
          name="password"
          aria-label='password'
          placeholder='Password'
          required
        />
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