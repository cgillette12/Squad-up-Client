import config from '../config'
import TokenService from './token-service'

const SquadService  = {
  getAllSquad() {
    return fetch(`${config.API_ENDPOINT}/squads`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getSquad(SquadId) {
    return fetch(`${config.API_ENDPOINT}/squads/${SquadId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  // postSquad(){
  //   return fetch(`${config.API_ENDPOINT}/squads`, {
  //     method: `POST`,
  //     headers:{
  //       'authorization' :`bearer ${TokenService.getAuthToken()}`,
  //       'content-type':'application/json',
  //     },
  //     body: body: JSON.stringify(),
  //   })
  // }
}
export default SquadService;