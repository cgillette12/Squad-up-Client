import React, { Component } from 'react'

const SquadContext = React.createContext({
  squadsList: [],
  selectedSquad: {
    squad: '',
    squadsList: []
  },
  squadIsSelected: false,
  error: null,
  setSquadsList: () => { },
  clearSquadsList: () => { },
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
      squadsList: [],
      selectedSquad: {
        squad: '',
        squadsList: [],
      },
      squadIsSelected: false,
      error: null
    }
  }

  setSquadsList = squadsList => {
    this.setState({ squadsList })
  }

  clearSquadsList = () => {
    this.setState({ squadsList: [] })
  }

  setSelectedSquad = selectedSquad => {
    this.setState({ selectedSquad })
    this.setState({ squadIsSelected: true })
  }

  clearSelectedSquad = () => {
    this.setState({ selectedSquad: { Squad: '', squadsList: [] } })
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
      squadsList: this.state.squadsList,
      selectedSquad: this.state.selectedSquad,
      SquadIsSelected: this.state.SquadIsSelected,
      error: this.state.error,
      setSquadsList: this.setSquadsList,
      clearSquadsList: this.clearSquadsList,
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
