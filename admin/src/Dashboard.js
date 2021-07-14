import styled from 'styled-components'
import { useState } from 'react'
import Header from './components/Header.js'
import SideNav from './components/SideNav.js'
import Inventory from './components/Inventory.js'

const StyledDashboard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-top: 4rem;
    padding-left: 16vw;
    height: 100vh;
    overflow: hidden;
`

export default function Dashboard({ inv, token, logout }) {
    const [page, setPage] = useState('inventory')

    return (
        <StyledDashboard>
            <Header text="Zircus Admin Dashboard" logout={logout} />
            <SideNav page={page} setPage={setPage} />
            {page === 'inventory' && <Inventory inv={inv} token={token} />}
        </StyledDashboard>
    )
}
