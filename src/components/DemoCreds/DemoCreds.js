import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'

function DemoCreds(props) {
  const userContext = useContext(UserContext)

  const handleDemoLoginSuccess = () => {
    const { location = {}, history = { push: () => {} } } = props
    const destination =
      (location.state || {}).from || window.innerWidth <= 800
        ? '/games'
        : '/dashboard'
    history.push(destination)
  }

  const handleDemoLogin = () => {
    return AuthApiService.postLogin({
      username: 'demo',
      password: 'pass1'
    })
      .then(res => {
        userContext.processLogin(res.authToken)
        handleDemoLoginSuccess()
      })
      .catch(res => {
        userContext.setError(res.error)
      })
  }

  return (
    <button className="link-button" onClick={handleDemoLogin}>
      Demo
    </button>
  )
}

export default withRouter(DemoCreds)
