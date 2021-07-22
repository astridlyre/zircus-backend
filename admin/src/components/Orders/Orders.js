import { useState } from 'react'
import Order from './Order.js'
import Filter from '../Filter/Filter.js'
import Page from '../Containers/Page.js'
import List from '../Containers/List.js'

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
            <List gap={true}>
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
            </List>
        </Page>
    )
}
