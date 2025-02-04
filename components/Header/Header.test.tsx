import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />)
 
    const tag = screen.getByRole('link', { name: 'Go to About us' })
 
    expect(tag).toBeInTheDocument()
  })
})