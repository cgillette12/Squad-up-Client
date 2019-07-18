import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './MobileUtils.css'

export default function MobileUtils() {
  const [redirect, setRedirect] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth >= 800) {
      redirect ? setRedirect(false) : setRedirect(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRedirect = () => {
    if (redirect) {
      return <Redirect to="/dashboard" />
    }
  }

  return (
    <div id="mobile-buttons-container">
      {handleRedirect()}
      <Link to="/squads" className="mobile-button">
        Squads
      </Link>
      <Link to="/games" className="mobile-button">
        Games
      </Link>
      <Link to="/chat" className="mobile-button">
        Chat
      </Link>
    </div>
  )
}
