import styled from 'styled-components'
import Page from './Page.js'

const StyledContainer = styled.div`
    display: flex;
    gap: var(--base-spacing);
    margin-top: var(--base-spacing);
`

const StyledH1 = styled.h1`
    width: 100%;
`

const StyledBubble = styled.div`
    background-color: var(--gray-20);
    border-radius: var(--big-radius);
    padding: var(--base-spacing);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const StyledOrdersNum = styled.span`
    font-size: 3rem;
    margin-top: auto;
`

const StyledItems = styled.ul`
    width: 100%;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-30);
    }
`

export default function Metrics({ orders, setShowModal, inv }) {
    const invFlat = (inv && Object.values(inv).flat()) || []
    return (
        <Page pad={true}>
            <StyledH1>Metrics</StyledH1>
            <StyledContainer>
                <StyledBubble>
                    <h2>total orders</h2>
                    <StyledOrdersNum>{orders && orders.length}</StyledOrdersNum>
                </StyledBubble>
                <StyledBubble>
                    <h2>low stock</h2>
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
        </Page>
    )
}
