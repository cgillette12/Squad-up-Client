import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
export default class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    this.props.set();
  }
  render() {
    return (
      <div className='Login-parent'>
        <section className='login-section'>
          <h1 className='Login-Title'>Login</h1>
          <LoginForm  onLoginSuccess = {this.handleLoginSuccess}/>
        </section>
      </div>
    )
  }
}
