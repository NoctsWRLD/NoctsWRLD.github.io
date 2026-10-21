import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { restorePath } from './lib/restorePath.js'
import './index.css'

// Runs before React mounts, so the router sees the restored path rather than
// the app root that the GitHub Pages 404 fallback redirected to.
restorePath()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
