import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function LoginRoute() {
  // static defaultProps = {
  //   location: {},
  //   history: {
  //     push: () => { },
  //   },
  // }
  // handleLoginSuccess = () => {
  //   const { location, history } = this.props
  //   const destination = (location.state || {}).from || '/'
  //   history.push(destination)
  //   this.props.set();
  // }

    return (
      <div className='login-parent'>
        <section className='login-section'>
          <h1 className='login-Title'>Login</h1>
          <LoginForm/>
        </section>
      </div>
    ) 
}
