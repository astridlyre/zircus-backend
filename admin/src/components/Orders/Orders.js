import { useState } from 'react'
import styled from 'styled-components'
import Order from './Order.js'
import Filter from '../Filter/Filter.js'
import Page from '../Containers/Page.js'

const StyledUl = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    gap: var(--base-spacing);
    max-width: var(--screen-lg);
`

export default function Orders({ orders, token, setShowModal, setOrders }) {
    const [filter, setFilter] = useState(['hasPaid'])
    const filters = [
        {
            active: filter.includes('hasShipped'),
            text: 'shipped',
            setActive: () =>
                filter.includes('hasShipped')
                    ? setFilter(filter =>
                          filter.filter(f => f !== 'hasShipped')
                      )
                    : setFilter(filter => filter.concat('hasShipped')),
        },
        {
            active: filter.includes('hasPaid'),
            text: 'paid',
            setActive: () =>
                filter.includes('hasPaid')
                    ? setFilter(filter => filter.filter(f => f !== 'hasPaid'))
                    : setFilter(filter => filter.concat('hasPaid')),
        },
    ]
    const filterOrder = order => {
        if (!filter.length) return true
        for (const f of filter) if (!order[f]) return false
        return true
    }
    const ordersToShow = orders && orders.filter(filterOrder)
    return (
        <Page padTop={true}>
            <Filter filters={filters} />
            <StyledUl>
                {orders &&
                    ordersToShow.map(order => (
                        <Order
                            token={token}
                            order={order}
                            key={order.id}
                            setShowModal={setShowModal}
                            setOrders={setOrders}
                        />
                    ))}
            </StyledUl>
        </Page>
    )
}
