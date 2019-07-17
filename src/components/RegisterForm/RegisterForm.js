import React, { useState } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import avatarList from './avatarList'
import './RegisterForm.css'

export default function RegisterForm(props) {
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [avatar, setAvatar] = useState('')
  const { onRegisterSuccess = () => {} } = props

  const handleNewUserSubmit = e => {
    e.preventDefault()
    setError(null)
    
    if (avatar.length === 0) {
      setError('Please choose an avatar!')
      return
    }

    AuthApiService.postUser({
      username: userName,
      name,
      password,
      avatar
    })
    .then(() => {
      setUserName('')
      setName('')
      setPassword('')
      setAvatar('')
      onRegisterSuccess()
    })
    .catch(res => {
      setError(res.error)
    })
  }
  
  return (
    <div className="register">
      <form className="register-form" onSubmit={handleNewUserSubmit}>
        <div className="red" role="alert">{error && <p>{error}</p>}</div>
        <Input
          onChange={e => setName(e.target.value)}
          id="register-name-input"
          type="text"
          name="name"
          placeholder="Name"
          aria-label="name"
          required
        />
        <Input
          onChange={e => setUserName(e.target.value)}
          id="register-username-input"
          type="text"
          name="username"
          aria-label="username"
          placeholder="Username"
          required
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          id="register-password-input"
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          required
        />
        <div className="avatar-section">
          <Label className="avatar">Select Your Avatar:</Label>
          <div className="avatar-list">
            {avatarList.map((avatar, index) => (
              <img
                key={index}
                className="avatar-item"
                onClick={() => setAvatar(avatar)}
                onKeyPress={e => {if(e.key === " ") setAvatar(avatar)}}
                tabIndex="0"
                src={avatar}
                alt={`avatar${index}`}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  )
}
