import React, { useContext } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import AuthApiService from '../../services/auth-api-service'

export default function RegisterRoute(props) {
<<<<<<< HEAD
  
  const handleRegisterSuccess = () => {
    const {location = {}, history={push: () => {}}} = props;
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
=======
  const userContext = useContext(UserContext)

  const handleRegisterSuccess = (username, password) => {
    return AuthApiService.postLogin({
      username,
      password
    })
      .then(res => {
        userContext.processLogin(res.authToken)

        const { location = {}, history = { push: () => {} } } = props
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
      })
      .catch(res => alert(res.error))
>>>>>>> 4c310966d1053e690bfb01e570fac7edf5d20224
  }

  return (
    <div className="register-parent">
      {TokenService.hasAuthToken() ? <Redirect to="/dashboard" /> : <></>}
      <section className="register-section">
        <h1 className="register-Title">Sign Up</h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      </section>
    </div>
  )
}
