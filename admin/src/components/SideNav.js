import styled from 'styled-components'

const StyledNav = styled.nav`
    position: fixed;
    top: 4rem;
    left: 0;
    bottom: 0;
    width: 16vw;
    padding: var(--base-spacing);
    border-right: 2px solid var(--gray-20);
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
`

const StyledLi = styled.li`
    margin: var(--base-unit) 0;
    width: 100%;
    display: flex;
`

const StyledButton = styled.button`
    flex-grow: 1;
`

export default function SideNav({ setPage, page }) {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledButton
                        className={
                            page === 'inventory' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('inventory')}
                    >
                        Inventory
                    </StyledButton>
                </StyledLi>
                <StyledLi>
                    <StyledButton
                        className={
                            page === 'order' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('orders')}
                    >
                        Orders
                    </StyledButton>
                </StyledLi>
                <StyledLi>
                    <StyledButton
                        className={
                            page === 'metrics' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('metrics')}
                    >
                        Metrics
                    </StyledButton>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
