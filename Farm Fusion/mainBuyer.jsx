import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Buyer from './buyer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buyer />
  </StrictMode>,
)
