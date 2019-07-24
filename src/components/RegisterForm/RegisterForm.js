import React, { useState } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Input, Label } from '../../components/FormUtils/FormUtils'
import avatarList from './avatarList'
import ScrollArea from 'react-scrollbar'
import './RegisterForm.css'
import DemoCreds from '../DemoCreds/DemoCreds';
import UserContext from '../../contexts/UserContext';

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
        onRegisterSuccess(userName, password)
        setUserName('')
        setName('')
        setPassword('')
        setAvatar('')
      })
      .catch(res => {
        setError(res.error)
      })
  }

  return (
    <div className="register">
      <ScrollArea
        speed={0.8}
        className="Scrollable-register"
        horizontal={false}
        vertical={true}
        smoothScrolling={true}
      >
        <form className="register-form" onSubmit={handleNewUserSubmit}>
          <div className="red" role="alert">
            {error && <p>{error}</p>}
          </div>
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
          <span className="Register__password-req-txt">
            Password must contain one upper case, lower case, number and special
            character & at least 8 characters long
          </span>
          <div className="avatar-section">
            <Label className="avatar">Select Your Avatar:</Label>
            <div className="avatar-list">
              {avatarList.map((avtr, index) => (
                <img
                  key={index}
                  className={`avatar-item${
                    avatar !== avtr ? '' : ' selected-avatar'
                  }`}
                  onClick={() => setAvatar(avtr)}
                  onKeyPress={e => {
                    if (e.key === ' ') setAvatar(avtr)
                  }}
                  tabIndex="0"
                  src={avtr}
                  alt={`avatar${index}`}
                />
              ))}
            </div>
          </div>
          <button type="submit" className="register-button">
            Sign Up
          </button>
          <DemoCreds />
        </form>
      </ScrollArea>
    </div>
  )
}
