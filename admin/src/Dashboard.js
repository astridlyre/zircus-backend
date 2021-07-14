import styled from 'styled-components'
import { useState } from 'react'
import Header from './components/Header.js'
import SideNav from './components/SideNav.js'
import Inventory from './components/Inventory.js'
import Metrics from './components/Metrics.js'
import Orders from './components/Orders.js'

const StyledDashboard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-top: 4rem;
    padding-left: ${props => (props.showFull ? '12rem' : '4rem')};
    height: 100vh;
    overflow: hidden;
`

export default function Dashboard({
    inv,
    orders,
    token,
    setShowModal,
    logout,
    setOrders,
    setInv,
    user,
}) {
    const [page, setPage] = useState('metrics')
    const [showFull, setShowFull] = useState(true)
    const numOrders = orders ? orders.length : 0
    const reduceFn = (inv, fn) => inv.reduce((acc, item) => acc + fn(item), 0)
    const qty = item => item.quantity
    const numInv = inv
        ? reduceFn(
              [
                  reduceFn(inv.ff, qty),
                  reduceFn(inv.pf, qty),
                  reduceFn(inv.cf, qty),
              ],
              x => x
          )
        : 0

    return (
        <StyledDashboard showFull={showFull}>
            <Header text="Zircus Admin Dashboard" logout={logout} user={user} />
            <SideNav
                page={page}
                setPage={setPage}
                orders={numOrders}
                inv={numInv}
                showFull={showFull}
                setShowFull={setShowFull}
            />
            {page === 'inventory' && (
                <Inventory
                    inv={inv}
                    token={token}
                    setShowModal={setShowModal}
                    setInv={setInv}
                />
            )}
            {page === 'orders' && (
                <Orders
                    orders={orders}
                    token={token}
                    setShowModal={setShowModal}
                    setOrders={setOrders}
                />
            )}
            {page === 'metrics' && (
                <Metrics
                    orders={orders}
                    setShowModal={setShowModal}
                    inv={inv}
                />
            )}
        </StyledDashboard>
    )
}
