import Login from './Login.js'
import Dashboard from './Dashboard.js'
import { useEffect, useState } from 'react'
import { getInv } from './services/services.js'

function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [inv, setInv] = useState(null)

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
    }, [setInv])

    return token ? (
        <Dashboard inv={inv} token={token} logout={logout} />
    ) : (
        <Login setUser={setUser} setToken={setToken} />
    )
}

export default App
