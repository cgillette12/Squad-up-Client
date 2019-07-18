import React from 'react';
import { expect } from 'chai';
import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewSquadForm from '../components/NewSquadForm/NewSquadForm';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewSquadForm />, div)
})
it('renders all components', () => {
    const wrapper = render(<NewSquadForm />)
    expect(wrapper.find('#squad-name-input')).to.have.length(1)
    expect(wrapper.find('#squad-tags-input')).to.have.length(1)
    expect(wrapper.find('.add-tag-button')).to.have.length(1)
    expect(wrapper.text()).equal('Add TagNew SquadCancel')
})
it("adds new tags", () => {
    const wrapper = mount(<NewSquadForm /> )
    expect(wrapper.find('li')).to.have.length(0)
    wrapper.find("input[id='squad-tags-input']").getDOMNode().value="DummyTag"
    wrapper.find('button').at(0).simulate("click")
    expect(wrapper.find('.squad-tag')).to.have.length(1)
})



