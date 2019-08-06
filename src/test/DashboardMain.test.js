import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import DashboardMain from '../components/DashboardMain/DashboardMain'

describe('Dashboard Main Component', () => {
  it('renders DashboardMain without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <DashboardMain />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI correctly', () => {
    const createNodeMock = el => {
      if (el.type === 'div') {
        const mockEl = document.createElement('div')
        mockEl.style.padding = '0'
        Object.defineProperty(mockEl, 'clientHeight', {
          get() {
            return 100
          },
          enumerable: true,
          configurable: true
        })
        Object.defineProperty(mockEl, 'clientWidth', {
          get() {
            return 300
          },
          enumerable: true,
          configurable: true
        })
        return mockEl
      }
      return null
    }

    const tree = renderer
      .create(
        <BrowserRouter>
          <DashboardMain />
        </BrowserRouter>,
        { createNodeMock }
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
