import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'
import renderer from 'react-test-renderer';
import LandingPage from '../components/Landing-Page/Landing-Page';



it('renders LandingPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})
it('renders the LandingPage as expected', () => {
    const tree = renderer
        .create(<BrowserRouter>
            <LandingPage />
        </BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


