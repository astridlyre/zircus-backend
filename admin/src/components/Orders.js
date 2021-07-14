import { useState } from 'react'
import styled from 'styled-components'
import Order from './Order.js'
import Filter from './Filter.js'

const StyledPage = styled.main`
    overflow-y: scroll;
    padding-top: 8rem;
`

const StyledUl = styled.ul`
    display: flex;
    flex-flow: column nowrap;
`

export default function Orders({ orders, token, setShowModal, setOrders }) {
    const [filter, setFilter] = useState({ hasPaid: true, hasShipped: false })
    const filters = [
        {
            active: filter.hasShipped,
            text: 'Has Shipped',
            setActive: () =>
                filter.hasShipped
                    ? setFilter({ ...filter, hasShipped: false })
                    : setFilter({ ...filter, hasShipped: true }),
        },
        {
            active: filter.hasPaid,
            text: 'Has Paid',
            setActive: () =>
                filter.hasPaid
                    ? setFilter({ ...filter, hasPaid: false })
                    : setFilter({ ...filter, hasPaid: true }),
        },
    ]
    const ordersToShow =
        orders &&
        orders.filter(order => {
            for (const [key, val] of Object.entries(filter))
                if (order[key] !== val) return false
            return true
        })
    return (
        <StyledPage>
            <Filter filters={filters} />
            <StyledUl>
                {orders &&
                    ordersToShow.map(order => (
                        <Order
                            token={token}
                            order={order}
                            key={order.id}
                            setShowModal={setShowModal}
                            setOrders={() => orders => setOrders(orders)}
                        />
                    ))}
            </StyledUl>
        </StyledPage>
    )
}
