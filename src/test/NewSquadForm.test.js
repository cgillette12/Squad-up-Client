import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import NewSquadForm from '../components/SquadListItem/SquadListItem'

it('renders SquadListItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <NewSquadForm squad={{tags: []}} />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})