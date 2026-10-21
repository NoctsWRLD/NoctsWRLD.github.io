import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SectionLink } from './SectionLink.jsx'

describe('SectionLink', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    window.history.replaceState(null, '', '/')
  })

  it('keeps a real fragment in the href, so the link works without JavaScript', () => {
    render(<SectionLink href="#work">View the work</SectionLink>)
    expect(screen.getByRole('link', { name: 'View the work' })).toHaveAttribute('href', '#work')
  })

  it('scrolls to the section and strips the hash from the address bar', () => {
    const target = document.createElement('div')
    target.id = 'work'
    target.scrollIntoView = vi.fn()
    document.body.appendChild(target)

    window.history.replaceState(null, '', '/#work')

    render(<SectionLink href="#work">View the work</SectionLink>)
    screen.getByRole('link', { name: 'View the work' }).click()

    expect(target.scrollIntoView).toHaveBeenCalled()
    expect(window.location.hash).toBe('')
    expect(window.location.pathname).toBe('/')
  })

  it('leaves the URL alone when the section does not exist', () => {
    window.history.replaceState(null, '', '/#missing')

    render(<SectionLink href="#missing">Broken</SectionLink>)
    screen.getByRole('link', { name: 'Broken' }).click()

    expect(window.location.hash).toBe('#missing')
  })
})
