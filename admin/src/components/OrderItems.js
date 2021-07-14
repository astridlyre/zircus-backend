import styled from 'styled-components'

const StyledTotal = styled.p`
    margin-top: auto;
    text-align: right;
    font-weight: 600;
`

const StyledItems = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 14rem;
    border-right: 2px solid var(--gray-30);
    padding-right: var(--base-spacing);
`

export default function OrderItems({ order }) {
    return (
        <StyledItems>
            <ul>
                {order.items.map(item => (
                    <li key={item.type}>
                        {item.type} x {item.quantity}
                    </li>
                ))}
            </ul>
            <StyledTotal>total ${order.total.toFixed(2)}</StyledTotal>
        </StyledItems>
    )
}
