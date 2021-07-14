import Login from './Login.js'
import Dashboard from './Dashboard.js'
import { useEffect, useState } from 'react'
import { getInv, getOrders } from './services/services.js'

function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [inv, setInv] = useState(null)
    const [orders, setOrders] = useState(null)

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
        getOrders(token)
            .then(reply => setOrders(reply.data))
            .catch(() => setOrders(null))
    }, [setInv, token])

    return token ? (
        <Dashboard inv={inv} orders={orders} token={token} logout={logout} />
    ) : (
        <Login setUser={setUser} setToken={setToken} />
    )
}

export default App
