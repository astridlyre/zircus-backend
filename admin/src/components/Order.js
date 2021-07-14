import { useState } from 'react'
import styled from 'styled-components'
import { updateOrder, deleteOrder } from '../services/services.js'

const StyledLi = styled.li`
    display: flex;
    gap: 2rem;
    @media screen and (min-width: 1281px) {
        gap: 4rem;
    }
    padding: var(--base-spacing);
    width: 100%;
    border-left: 0.5rem solid
        ${props =>
            props.hasPaid && props.hasShipped
                ? 'var(--green)'
                : props.hasPaid
                ? 'var(--yellow)'
                : 'var(--gray-20)'};

    &:hover {
        background-color: var(--gray-20);
    }
`

const StyledAddress = styled.address`
    flex-grow: 1;
`

const StyledItems = styled.div``

const StyledDate = styled.span`
    font-size: 1.125rem;
    font-weight: 500;
    display: block;
    margin-bottom: var(--base-unit);
`

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
`

export default function Order({ order, token, setShowModal, setOrders }) {
    const handleDeleteSuccess = ({ data }) => {
        setShowModal({
            heading: 'Success',
            text: data.response,
            ok: () =>
                setOrders()(orders => orders.filter(o => o.id !== order.id)),
        })
    }
    const handleDeleteFailure = ({ data }) => {
        setShowModal({
            heading: 'Error',
            text: data.error,
            ok: () => {},
        })
    }
    const handleDelete = () => {
        setShowModal({
            heading: 'Confirm deletion',
            text: `Delete ${order.name}'s order?'`,
            ok: choice => {
                if (choice)
                    deleteOrder(order.id, token)
                        .then(handleDeleteSuccess)
                        .catch(handleDeleteFailure)
            },
        })
    }

    const updatePaid = () =>
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasPaid: !order.hasPaid,
                },
            },
            token
        )
            .then(() =>
                setOrders()(orders =>
                    orders.map(o =>
                        o.id === order.id ? { ...o, hasPaid: !o.hasPaid } : o
                    )
                )
            )
            .catch(e => console.log(e))

    const updateShipped = () =>
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasShipped: !order.hasShipped,
                },
            },
            token
        )
            .then(() =>
                setOrders()(orders =>
                    orders.map(o =>
                        o.id === order.id
                            ? { ...o, hasShipped: !o.hasShipped }
                            : o
                    )
                )
            )
            .catch(e => console.log(e))

    return (
        <StyledLi hasPaid={order.hasPaid} hasShipped={order.hasShipped}>
            <div>
                <StyledDate>
                    {new Date(order.createdOn).toLocaleString('en-US')}
                </StyledDate>
                <ul>
                    <li>
                        Has paid:{' '}
                        <strong>{order.hasPaid ? 'Yes' : 'No'}</strong>
                    </li>
                    <li>
                        Has shipped:{' '}
                        <strong>{order.hasShipped ? 'Yes' : 'No'}</strong>
                    </li>
                    <li>
                        <strong>${order.total}</strong>
                    </li>
                </ul>
            </div>
            <StyledItems>
                <StyledDate>Items</StyledDate>
                <ul>
                    {order.items.map(item => (
                        <li key={item.type}>
                            {item.type} x {item.quantity}
                        </li>
                    ))}
                </ul>
            </StyledItems>
            <StyledAddress>
                <strong>{order.name}</strong>
                <br />
                <a href={`mailto:${order.email}`}>{order.email}</a>
                <br />
                {order.streetAddress}
                <br />
                {order.city} {order.state}
                <br />
                {order.zip.toUpperCase()} {order.country}
                <br />
            </StyledAddress>
            <StyledDiv>
                <button
                    className="button outline"
                    type="button"
                    onClick={updatePaid}
                >
                    {order.hasPaid ? 'Set Not Paid' : 'Set Paid'}
                </button>
                <button
                    className="button positive outline"
                    type="button"
                    onClick={updateShipped}
                >
                    {order.hasShipped ? 'Set Not Shipped' : 'Set Shipped'}
                </button>
                <button
                    className="button danger outline"
                    type="button"
                    onClick={handleDelete}
                >
                    Delete Order
                </button>
            </StyledDiv>
        </StyledLi>
    )
}
