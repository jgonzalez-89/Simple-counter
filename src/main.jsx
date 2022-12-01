import React from 'react'
import ReactDOM from 'react-dom/client'
import Buttons from './components/Buttons'
import Counter from './components/Counter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <Buttons />
  </React.StrictMode>
)
