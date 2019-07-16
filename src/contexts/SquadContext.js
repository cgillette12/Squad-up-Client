import React, { Component } from 'react'

const SquadContext = React.createContext({
  squadList: [],
  selectedSquad: {
    squad: '',
    squadList: []
  },
  squadIsSelected: false,
  error: null,
  setSquadList: () => { },
  clearSquadList: () => { },
  setSelectedSquad: () => { },
  clearSelectedSquad: () => { },
  setError: () => { },
  clearError: () => { }
 })

export default SquadContext

export class SquadProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squadList: [],
      selectedSquad: {
        squad: '',
        squadList: [],
      },
      squadIsSelected: false,
      error: null
    }
  }

  setSquadList = squadList => {
    this.setState({ squadList })
  }

  clearSquadList = () => {
    this.setState({ squadList: [] })
  }

  setSelectedSquad = selectedSquad => {
    this.setState({ selectedSquad })
    this.setState({ squadIsSelected: true })
  }

  clearSelectedSquad = () => {
    this.setState({ selectedSquad: { Squad: '', squadList: [] } })
    this.setState({ squadIsSelected: false })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      squadList: this.state.squadList,
      selectedSquad: this.state.selectedSquad,
      SquadIsSelected: this.state.SquadIsSelected,
      error: this.state.error,
      setSquadList: this.setSquadList,
      clearSquadList: this.clearSquadList,
      setSelectedSquad: this.setSelectedSquad,
      clearSelectedSquad: this.clearSelectedSquad,
      setError: this.setError,
      clearError: this.clearError
    }

    return (
      <SquadContext.Provider value={value}>
        {this.props.children}
      </SquadContext.Provider>
    )
  }
}
