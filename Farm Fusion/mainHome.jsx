import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import FullHome from './FullHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FullHome />
  </StrictMode>,
)
