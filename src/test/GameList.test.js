import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import GameList from '../components/GamesList/GamesList';


it('renders GameList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <GameList />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})