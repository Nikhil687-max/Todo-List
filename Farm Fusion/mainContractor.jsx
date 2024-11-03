import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Contractor from './Contractor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contractor />
  </StrictMode>,
)
