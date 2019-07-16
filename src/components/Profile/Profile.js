import React, { useEffect, useContext } from 'react'
import './Profile.css'
import UserBlock from './UserBlock'
import UserContext from '../../contexts/UserContext'
import ProfileService from '../../services/profile-service'


export default function Profile(){
    const userContext = useContext(UserContext)
    
    
    useEffect( () => {
        console.log(userContext.user.id)
        ProfileService.getUserInfo(userContext.user.id)
        .then(data => {
            console.log(data)
            userContext.setUser(data)
        })
    },[])

    const setAvatar = (id, image) => {
        ProfileService.updateAvatar(id, image)
        .then(info => {
            UserContext.setUser(info)
        })
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