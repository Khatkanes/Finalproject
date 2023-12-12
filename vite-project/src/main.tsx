import React from 'react'
import ReactDOM from 'react-dom/client'
import WrappedApp from './assets/Components/WrappedApp.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedApp></WrappedApp>
  </React.StrictMode>,
)
