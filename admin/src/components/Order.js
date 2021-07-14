import styled from 'styled-components'
import { updateOrder, deleteOrder } from '../services/services.js'
import OrderAddress from './OrderAddress.js'
import OrderHeader from './OrderHeader.js'
import OrderItems from './OrderItems.js'
import Label from './Label.js'
import DeleteButton from './DeleteButton.js'

const StyledLi = styled.li`
    margin: 0 auto;
    display: flex;
    gap: var(--base-spacing);
    padding: var(--base-spacing);
    max-width: var(--screen-lg);
    width: 100%;
    border-left: 0.5rem solid;
    border-right: 0.5rem solid;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: ${props =>
        props.hasPaid && props.hasShipped
            ? 'var(--green)'
            : props.hasPaid
            ? 'var(--yellow)'
            : 'var(--gray-30)'};

    &:hover {
        background-color: var(--gray-20);
    }
`

const StyledActions = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const StyledBtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-grow: 1;
`

export default function Order({ order, token, setShowModal, setOrders }) {
    const handleDeleteSuccess = ({ data }) => {
        setShowModal({
            heading: 'Success',
            text: data.response,
            ok: () =>
                setOrders(orders => orders.filter(o => o.id !== order.id)),
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

    const updatePaid = () => {
        setOrders(orders =>
            orders.map(o =>
                o.id === order.id ? { ...o, hasPaid: !o.hasPaid } : o
            )
        )
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasPaid: !order.hasPaid,
                },
            },
            token
        ).catch(e => console.log(e))
    }

    const updateShipped = () => {
        setOrders(orders =>
            orders.map(o =>
                o.id === order.id ? { ...o, hasShipped: !o.hasShipped } : o
            )
        )
        updateOrder(
            {
                id: order.id,
                updatedAttributes: {
                    hasShipped: !order.hasShipped,
                },
            },
            token
        ).catch(e => console.log(e))
    }

    return (
        <StyledLi hasPaid={order.hasPaid} hasShipped={order.hasShipped}>
            <OrderItems order={order} />
            <OrderAddress order={order} />
            <StyledActions>
                <OrderHeader>
                    {new Date(order.createdOn).toLocaleString('en-US')}
                </OrderHeader>
                <Label>
                    paid:
                    <input
                        type="checkbox"
                        checked={order.hasPaid}
                        onChange={updatePaid}
                    />
                </Label>
                <Label>
                    shipped:
                    <input
                        type="checkbox"
                        checked={order.hasShipped}
                        onChange={updateShipped}
                    />
                </Label>
                <StyledBtnContainer>
                    <DeleteButton onClick={handleDelete} />
                </StyledBtnContainer>
            </StyledActions>
        </StyledLi>
    )
}
