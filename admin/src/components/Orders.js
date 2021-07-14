import styled from 'styled-components'
import Order from './Order.js'

const StyledPage = styled.main`
    overflow-y: scroll;
`

const StyledUl = styled.ul`
    padding: var(--base-spacing) !important;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
`

export default function Orders({ orders, token }) {
    return (
        <StyledPage>
            <StyledUl>
                {orders &&
                    orders.map(order => (
                        <Order token={token} order={order} key={order.id} />
                    ))}
            </StyledUl>
        </StyledPage>
    )
}
