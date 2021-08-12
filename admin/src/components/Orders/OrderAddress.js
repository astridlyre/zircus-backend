import styled from 'styled-components'
import MediumHeader from '../Text/MediumHeader.js'

const StyledAddress = styled.address`
    flex-grow: 1;
`

export default function OrderAddress({ order }) {
    return (
        <StyledAddress>
            <MediumHeader>{order.name}</MediumHeader>
            <a href={`mailto:${order.email}`}>{order.email}</a>
            <br />
            {order.address.line1}
            <br />
            {order.address.line2}
            <br />
            {order.address.city} {order.address.state}
            <br />
            {order.address.postal_code.toUpperCase()} {order.address.country}
            <br />
        </StyledAddress>
    )
}
