import Login from './Login.js'
import Dashboard from './Dashboard.js'
import Modal from './components/Modal/Modal.js'
import { useEffect, useState } from 'react'
import { getInv, getMessages, getOrders } from './services/services.js'

function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [inv, setInv] = useState(null)
    const [messages, setMessages] = useState(null)
    const [orders, setOrders] = useState(null)
    const [showModal, setShowModal] = useState(null)

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
    }, [setInv, token])

    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            {token ? (
                <Dashboard
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
