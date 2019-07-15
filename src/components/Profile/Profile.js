import React, { useEffect, useContext } from 'react'
import './Profile.css'
import UserBlock from './UserBlock'
import UserContext from '../../contexts/UserContext'
import UserApiService from '../../services/user-api-service'


export default function Profile(){
    const userContext = useContext(UserContext)
    console.log(userContext.user)
    
    useEffect( () => {
        UserApiService.getUserInfo(userContext.user.username)
        .then(data => {
            userContext.setUser(data)
        })
    },[])

    const setAvatar = (image) => {
        UserApiService.getUserInfo(userContext.user.id)
        .then(data => console.log(data))
    }


    return (
        <div className="Profile-Container">
            <div className="User-Container">
                <UserBlock
                    xp={userContext.user.xp}
                    xpthreshold={userContext.user.xp_threshold}
                    level={userContext.user.level_id}
                    avatar={userContext.user.avatar}
                    setAvatar={setAvatar}
                    username={userContext.user.name}
                />
            </div>
        </div>
    )

}