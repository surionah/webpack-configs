import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should be rendered correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading').textContent).toBe('React works!!!')
  })
})
