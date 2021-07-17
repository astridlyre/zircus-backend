import styled from 'styled-components'
import OrderHeader from './OrderHeader.js'

const StyledAddress = styled.address`
    flex-grow: 1;
`

export default function OrderAddress({ order }) {
    return (
        <StyledAddress>
            <OrderHeader>{order.name}</OrderHeader>
            <a href={`mailto:${order.email}`}>{order.email}</a>
            <br />
            {order.streetAddress}
            <br />
            {order.city} {order.state}
            <br />
            {order.zip.toUpperCase()} {order.country}
            <br />
        </StyledAddress>
    )
}
