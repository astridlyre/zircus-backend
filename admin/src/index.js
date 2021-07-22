import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { WebsocketProvider } from './services/Websocket.js'

ReactDOM.render(
    <React.StrictMode>
        <WebsocketProvider>
            <App />
        </WebsocketProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
