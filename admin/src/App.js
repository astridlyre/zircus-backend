import Login from './Login.js'
import Dashboard from './Dashboard.js'
import Modal from './components/Modal/Modal.js'
import { useContext, useEffect, useState } from 'react'
import { getInv, getMessages, getOrders } from './services/services.js'
import { WebsocketContext } from './services/Websocket.js'

function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [inv, setInv] = useState(null)
    const [messages, setMessages] = useState(null)
    const [orders, setOrders] = useState(null)
    const [showModal, setShowModal] = useState(null)
    const [notification, setNotification] = useState(null)
    const [websocketId, setWebsocketId] = useState(-1)
    const { addListener, removeListener } = useContext(WebsocketContext)

    const updateMessages = data => {
        notify(`New message from ${data.name}`, 'green')
        getMessages(token)
            .then(reply => setMessages(reply.data.messages))
            .catch(() => setMessages(null))
    }

    const updateOrders = (data, { text, color }) => {
        notify(`${text} ${data.name}`, color)
        getInv()
            .then(reply => setInv(reply.data))
            .catch(() => setInv(null))
        getOrders(token)
            .then(reply => setOrders(reply.data))
            .catch(() => setOrders(null))
    }

    const initWebsocketListener = () => {
        const websocketListenerId = addListener(msg => {
            if (!token) return
            switch (msg.type) {
                case 'message':
                    return updateMessages(msg.data)
                case 'pending order':
                    return updateOrders(msg.data, {
                        text: 'Pending order from',
                        color: 'gray',
                    })
                case 'paid order':
                    return updateOrders(msg.data, {
                        text: 'New paid order from',
                        color: 'green',
                    })
            }
        })
        setWebsocketId(websocketListenerId)
    }

    const onComponentDestroy = () => {
        removeListener(websocketId)
        setWebsocketId(-1)
    }

    const notify = (text, style) => {
        if (notification && notification.self) clearTimeout(notification.self)
        const self = setTimeout(() => setNotification(null), 4500)
        setNotification({ text, style, self })
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    useEffect(() => {
        getInv()
            .then(reply => setInv(reply.data))
            .catch(() => setInv(null))
        if (token !== null) {
            getOrders(token)
                .then(reply => setOrders(reply.data))
                .catch(() => setOrders(null))
            getMessages(token)
                .then(reply => setMessages(reply.data.messages))
                .catch(() => setMessages(null))
        }
        initWebsocketListener()
        return onComponentDestroy
    }, [setInv, token])

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            {token ? (
                <Dashboard
                    notification={notification}
                    notify={notify}
                    inv={inv}
                    orders={orders}
                    token={token}
                    logout={logout}
                    setShowModal={setShowModal}
                    setOrders={setOrders}
                    setInv={setInv}
                    user={user}
                    messages={messages}
                    setMessages={setMessages}
                />
            ) : (
                <Login setUser={setUser} setToken={setToken} />
            )}
        </Modal>
    )
}

export default App
