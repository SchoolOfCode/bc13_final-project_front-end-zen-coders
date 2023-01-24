import { render, screen } from '@testing-library/react'
import AboutProfileCard from './AboutProfileCard'
import '@testing-library/jest-dom'


describe('AboutProfileCard', () => {
    it('renders a-tag description', () => {
      render(<AboutProfileCard />)
  const h = screen.getByRole('h1')
  expect(h).toBeInTheDocument()
    })

  
    })
  