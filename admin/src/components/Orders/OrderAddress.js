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
            {order.streetAddress}
            <br />
            {order.city} {order.state}
            <br />
            {order.zip.toUpperCase()} {order.country}
            <br />
        </StyledAddress>
    )
}
