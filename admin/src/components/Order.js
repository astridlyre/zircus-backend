import { useState } from 'react'
import styled from 'styled-components'
import { updateOrder } from '../services/services.js'

const StyledLi = styled.li`
    display: flex;
    gap: 2rem;
    padding: var(--base-spacing);
    width: 100%;
    border-radius: var(--big-radius);

    &:hover {
        background-color: var(--gray-20);
    }
`

const StyledAddress = styled.address`
    flex-grow: 1;
`

const StyledDate = styled.span`
    font-size: 1.125rem;
    font-weight: 500;
    display: block;
    margin-bottom: var(--base-spacing);
`

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
`

export default function Order({ order, token }) {
    const [hasPaid, setHasPaid] = useState(order.hasPaid)
    const [hasShipped, setHasShipped] = useState(order.hasShipped)

    const updatePaid = () =>
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasPaid: !hasPaid,
                },
            },
            token
        )
            .then(() => setHasPaid(!hasPaid))
            .catch(e => console.log(e))

    const updateShipped = () =>
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasShipped: !hasShipped,
                },
            },
            token
        )
            .then(() => setHasShipped(!hasShipped))
            .catch(e => console.log(e))

    return (
        <StyledLi>
            <div>
                <StyledDate>
                    {new Date(order.createdOn).toLocaleString('en-US')}
                </StyledDate>
                <ul>
                    <li>Has paid: {hasPaid ? 'Yes' : 'No'}</li>
                    <li>Has shipped: {hasShipped ? 'Yes' : 'No'}</li>
                    <li>
                        <strong>${order.total}</strong>
                    </li>
                </ul>
            </div>
            <ul>
                {order.items.map(item => (
                    <li key={item.type}>
                        {item.type} x {item.quantity}
                    </li>
                ))}
            </ul>
            <StyledAddress>
                <strong>{order.name}</strong>
                <br />
                <a href={`mailto:${order.email}`}>{order.email}</a>
                <br />
                {order.streetAddress}
                <br />
                {order.city}
                <br />
                {order.state}
                <br />
                {order.zip}
                <br />
            </StyledAddress>
            <StyledDiv>
                <button
                    className="button positive"
                    type="button"
                    onClick={updateShipped}
                >
                    Toggle Shipped
                </button>
                <button className="button" type="button" onClick={updatePaid}>
                    Toggle Paid
                </button>
                <button className="button danger" type="button">
                    Delete Order
                </button>
            </StyledDiv>
        </StyledLi>
    )
}
