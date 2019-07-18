import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Profile from '../components/Profile/Profile';


it('renders Profile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <Profile />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})