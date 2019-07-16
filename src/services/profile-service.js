import config from '../config';
import TokenService from './token-service'

const ProfileService = {
    getUserInfo(id){
        return fetch(`${config.API_ENDPOINT}/user/`+id, {
            method:'GET',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        }).then(
            res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            }
        )
    },
    updateAvatar(id, newAvatar){
        const bodyObj = JSON.stringify({
            newAvatar,
            user_id:id
        })
        return fetch(`${config.API_ENDPOINT}/info`, {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: bodyObj
        }).then(res => 
            res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    }
}
export default  ProfileService