import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LoginForm from '../components/LoginForm/LoginForm';



it('renders LoginForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <LoginForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the LandingPage as expected', () => {
    const tree = renderer
        .create(<BrowserRouter>
            <LoginForm/>
        </BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


