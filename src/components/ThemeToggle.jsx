import { motion, useReducedMotion } from 'motion/react'

/**
 * Switches between the dark and light token sets. The icon is drawn, not an
 * emoji, so it inherits the type colour and stays legible in both themes.
 * It turns as it changes, so the switch reads as an action.
 */
export function ThemeToggle({ theme, onToggle }) {
  const reduce = useReducedMotion()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="inline-flex h-9 w-9 items-center justify-center border border-line text-ash transition-colors hover:border-brass hover:text-brass"
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.92 }}
      transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.span
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex"
      >
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.25" />
            <path
              d="M8 1v1.75M8 13.25V15M15 8h-1.75M2.75 8H1M12.95 3.05l-1.24 1.24M4.29 11.71l-1.24 1.24M12.95 12.95l-1.24-1.24M4.29 4.29L3.05 3.05"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.span>
    </motion.button>
  )
}
