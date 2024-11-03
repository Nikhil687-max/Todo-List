import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Farmer from './Farmer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Farmer />
  </StrictMode>,
)
