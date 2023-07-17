import React from 'react'
import ReactDOM from 'react-dom/client'
import OHooks from './1OhmHooks/1OhmHook.jsx'
import Spendee from './2Kong/2KongReact17.jsx'
import WebRouter from './3OhmRouter/3main.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <OHooks /> */}
    {/* <Spendee /> */}
    <WebRouter />
  </React.StrictMode>,
)
