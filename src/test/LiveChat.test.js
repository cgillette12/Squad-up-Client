import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import LiveChat from '../components/LiveChat/LiveChat';


it('renders LiveChat without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <LiveChat />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})