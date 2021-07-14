import styled from 'styled-components'
import { useState } from 'react'
import Header from './components/Header.js'
import SideNav from './components/SideNav.js'
import Inventory from './components/Inventory.js'
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
}) {
    const [page, setPage] = useState('inventory')
    const [showFull, setShowFull] = useState(true)
    const numOrders = orders ? orders.length : 0
    const numInv = inv ? [...inv.ff, ...inv.pf, ...inv.cf].length : 0

    return (
        <StyledDashboard showFull={showFull}>
            <Header text="Zircus Admin Dashboard" logout={logout} />
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
        </StyledDashboard>
    )
}
