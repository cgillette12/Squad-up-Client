import config from '../config'
import TokenService from './token-service'

const UserApiService = {
    getUserInfo(user_id){
        return fetch(`${config.API_ENDPOINT}/user/`+user_id, {
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'content-type': 'application/json'
            }
        })
        .then(res =>
             !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    }
}

export default UserApiService
