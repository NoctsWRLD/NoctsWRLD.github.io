import { describe, expect, it } from 'vitest'
import { authored, barWidth, formatBytes, generated } from './stack.js'

describe('formatBytes', () => {
  it('shows raw bytes below a kilobyte', () => {
    expect(formatBytes(248)).toBe('248 B')
  })

  it('keeps one decimal for kilobytes', () => {
    expect(formatBytes(6400)).toBe('6.4 kB')
  })

  it('keeps one decimal for large kilobytes too', () => {
    expect(formatBytes(249377)).toBe('249.4 kB')
  })
})

describe('barWidth', () => {
  it('gives the largest row the full width', () => {
    expect(barWidth(249377, authored)).toBe(100)
  })

  it('scales the rest relative to the largest', () => {
    expect(barWidth(249377 / 2, authored)).toBeCloseTo(50)
  })

  it('keeps a tiny row visible instead of rounding it away', () => {
    expect(barWidth(1, generated)).toBe(1.5)
  })

  it('scales each group independently', () => {
    expect(barWidth(47874, generated)).toBe(100)
    expect(barWidth(47874, authored)).toBeLessThan(100)
  })

  it('returns zero when there is nothing to scale against', () => {
    expect(barWidth(10, [])).toBe(0)
  })
})
