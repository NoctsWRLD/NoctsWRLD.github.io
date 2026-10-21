/**
 * A link to a section of the page that keeps the address bar clean.
 *
 * Clicking scrolls to the section and then removes the hash from the URL, so
 * the address bar stays on the page's address instead of filling with
 * fragments. Nothing is pushed onto the history stack, so the back button
 * still goes where the visitor expects it to.
 *
 * The `href` remains a real fragment, so the link still works with JavaScript
 * disabled, can be opened in a new tab, and can be copied.
 */
export function SectionLink({ href, children, className, ...rest }) {
  const handleClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const id = href.startsWith('#') ? href.slice(1) : null
    if (!id) return

    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Keep the address bar clean: no hash, and no history entry left behind.
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  )
}
