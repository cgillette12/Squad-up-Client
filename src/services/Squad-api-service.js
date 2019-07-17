import config from '../config'
import TokenService from './token-service'

const SquadService = {
  getAllSquads() {
    return fetch(`${config.API_ENDPOINT}/squads`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getSquad(SquadId) {
    return fetch(`${config.API_ENDPOINT}/squads/${SquadId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getSquadMembers(squad_id) {
    return fetch(`${config.API_ENDPOINT}/squads/${squad_id}/members`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  joinSquad({ squad_id }) {
    return fetch(`${config.API_ENDPOINT}/squads/join`, {
      method: `POST`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ squad_id })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.text()
    )
  }
}
export default SquadService
