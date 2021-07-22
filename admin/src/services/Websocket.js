import React, { useRef } from 'react'

let listeners = []

const WebsocketContext = React.createContext()

const WebsocketProvider = ({ children }) => {
    const websocket = useRef(null)
    let autoReconnectInterval = 250

    const initializeWebSocket = () => {
        websocket.current = new WebSocket(`ws://localhost:3000`)
        websocket.current.onopen = () => {
            console.debug('Websocket connection open')
            autoReconnectInterval = 250
        }
        websocket.current.onmessage = msg => {
            const decodedMessage = JSON.parse(msg.data)
            handleMessage(decodedMessage)
        }
        websocket.current.onclose = e => {
            switch (e.code) {
                case 1000:
                    console.debug('Websocket closed normally')
                    break
                default:
                    autoReconnectInterval += autoReconnectInterval
                    reconnectToWebSocket(autoReconnectInterval)
            }
        }
        websocket.current.onerror = err => {
            switch (err.code) {
                case 'ECONNREFUSED':
                    autoReconnectInterval = autoReconnectInterval +=
                        autoReconnectInterval
                    reconnectToWebSocket(autoReconnectInterval)
                    break
                default:
                    console.error(`Websocket encountered error: ${err}`)
            }
        }
    }

    const reconnectToWebSocket = autoReconnectInterval => {
        const maximumConnectionTimeout = 10000
        setTimeout(
            initializeWebSocket,
            Math.min(maximumConnectionTimeout, autoReconnectInterval)
        )
    }

    const handleMessage = msg => {
        console.debug(`[Websocket-IncomingMessage] `, msg)
        listeners.forEach(x => x.messageHandler(msg))
    }

    const disconnectWebSocket = () => {
        if (!!websocket.current) websocket.current.close(1000)
    }

    const addListener = messageHandler => {
        const id = listeners.length
        listeners.push({ id, messageHandler })
        return id
    }

    const removeListener = id =>
        (listeners = listeners.filter(l => l.id !== id))

    return (
        <WebsocketContext.Provider
            value={{
                initializeWebSocket,
                disconnectWebSocket,
                addListener,
                removeListener,
            }}
        >
            {children}
        </WebsocketContext.Provider>
    )
}

const WebsocketConsumer = WebsocketContext.Consumer

export { WebsocketProvider, WebsocketConsumer, WebsocketContext }
