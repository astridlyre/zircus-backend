import { useState } from 'react'
import styled from 'styled-components'
import Order from './Order.js'
import Filter from './Filter.js'

const StyledPage = styled.main`
    overflow-y: scroll;
    padding-top: calc(4rem + var(--base-unit) * 2);
`

const StyledUl = styled.ul`
    display: flex;
    flex-flow: column nowrap;
`

export default function Orders({ orders, token, setShowModal, setOrders }) {
    const [filter, setFilter] = useState({
        hasPaid: true,
        hasShipped: false,
    })
    const [showAll, setShowAll] = useState(false)
    const filters = [
        {
            active: filter.hasShipped && !showAll,
            text: 'Has Shipped',
            setActive: () =>
                filter.hasShipped
                    ? setFilter({ ...filter, hasShipped: false })
                    : setFilter({ ...filter, hasShipped: true }),
        },
        {
            active: filter.hasPaid && !showAll,
            text: 'Has Paid',
            setActive: () =>
                filter.hasPaid
                    ? setFilter({ ...filter, hasPaid: false })
                    : setFilter({ ...filter, hasPaid: true }),
        },
        {
            active: showAll,
            text: 'All',
            setActive: () => setShowAll(!showAll),
        },
    ]
    const ordersToShow =
        orders && showAll
            ? orders
            : orders.filter(order => {
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
