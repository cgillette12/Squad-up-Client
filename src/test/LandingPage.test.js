import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App/App'
import { MemoryRouter } from 'react-router-dom'
import LandingPageRoute from '../Routes/LandingPageRoute/LandingPageRoute';
Enzyme.configure({ adapter: new Adapter() });

it('renders the landing page without crashing and renders the correct text', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App/>
        </MemoryRouter>
    )
    expect(wrapper.find(LandingPageRoute)).to.have.length(1)
    expect(wrapper.text()).equal('Squad UpRegisterLoginHomeSquadsChatLoginLogoutWelcome to Squad Up!Squad Up, allows its users to look through many games and form a community. Feel free to register and have a look around!RegisterLogin')
})
it('renders both register and log in button', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App/>
        </MemoryRouter>
    )
    expect(wrapper.find('.link-button')).to.have.length(2)
    expect(wrapper.find('.link-button').at(0).text()).equal('Register')
    expect(wrapper.find('.link-button').at(1).text()).equal('Login')
})

