import styled from 'styled-components'
import Page from '../Containers/Page.js'
import OrdersChart from './OrdersChart.js'

const StyledContainer = styled.div`
    display: flex;
    ${props =>
        props.flow ? `flex-flow: ${props.flow};` : 'flex-flow: row wrap;'}
    gap: var(--base-spacing);
    margin-top: var(--base-spacing);
    width: 100%;
    max-width: var(--screen-md);
`

const StyledBubble = styled.div`
    background-color: var(--gray-20);
    border-radius: var(--radius);
    flex-basis: 12rem;
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    margin-bottom: var(--lg-spacing);

    h3 {
        background-color: var(--dgray-80);
        color: var(--gray-10);
        width: 100%;
        text-align: center;
        padding: var(--base-unit) var(--base-spacing);
    }
`

const StyledOrdersNum = styled.span`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: var(--xxl-font-size);
`

const StyledItems = styled.ul`
    width: 100%;
    padding: var(--base-spacing) !important;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-30);
        padding: var(--base-unit);

        &:hover {
            background-color: var(--gray-30);
        }
    }
`

export default function Metrics({ orders, inv, messages }) {
    const invFlat = (inv && Object.values(inv).flat()) || []
    return (
        <Page pad={true}>
            <StyledContainer flow="row wrap">
                <StyledBubble>
                    <h3>orders</h3>
                    <StyledOrdersNum>{orders && orders.length}</StyledOrdersNum>
                </StyledBubble>
                <StyledBubble>
                    <h3>messages</h3>
                    <StyledOrdersNum>
                        {messages && messages.length}
                    </StyledOrdersNum>
                </StyledBubble>
                <StyledBubble>
                    <h3>low stock</h3>
                    <StyledItems>
                        {invFlat.map(
                            item =>
                                item.quantity < 5 && (
                                    <li key={item.type}>
                                        <span>{item.type}</span>
                                        <span>{item.quantity}</span>
                                    </li>
                                )
                        )}
                    </StyledItems>
                </StyledBubble>
            </StyledContainer>
            <StyledContainer flow="column nowrap">
                <h2>Recent Orders</h2>
                <OrdersChart orders={orders} />
            </StyledContainer>
        </Page>
    )
}
