import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import GameSquadsList from '../components/GameSquadsList/GameSquadsList';


it('renders GameSquadList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <GameSquadsList />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})