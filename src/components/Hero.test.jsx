import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero.jsx'

describe('Hero', () => {
  it('leads with the name as the only level-one heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Jan Vidovič')
  })

  it('offers the two calls to action as in-page links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'View the work' })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })

  it('shows the positioning line rather than a job title', () => {
    render(<Hero />)
    expect(screen.getByText(/the parts I enjoy most/i)).toBeInTheDocument()
  })
})
