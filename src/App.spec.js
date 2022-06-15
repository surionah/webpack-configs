import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div').text()).toBe('React works!!!')
  })
})
