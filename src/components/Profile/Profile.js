import React, { useEffect, useContext } from 'react'
import './Profile.css'
import UserBlock from './UserBlock'
import UserContext from '../../contexts/UserContext'
import ProfileService from '../../services/profile-service'

export default function Profile() {
  const userContext = useContext(UserContext)

  useEffect(() => {
    ProfileService.getUserInfo(userContext.user.id).then(data => {
      userContext.setUser(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Profile-Container">
      <div className="User-Container">
        <UserBlock
          xp={userContext.user.xp}
          xpthreshold={userContext.user.xp_threshold}
          level={userContext.user.level}
          avatar={userContext.user.avatar}
          username={userContext.user.name}
        />
      </div>
    </div>
  )
}
