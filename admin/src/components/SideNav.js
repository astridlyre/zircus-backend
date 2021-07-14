import styled from 'styled-components'
import RightIcon from './RightIcon.js'
import LeftIcon from './LeftIcon.js'
import InventoryIcon from './InventoryIcon.js'
import OrdersIcon from './OrdersIcon.js'
import MetricsIcon from './MetricsIcon.js'
import SideNavButton from './SideNavButton.js'

const StyledNav = styled.nav`
    position: fixed;
    top: 4rem;
    left: 0;
    bottom: 0;
    width: ${props => (props.showFull ? '12rem' : '4rem')};
    border-right: 2px solid var(--gray-20);
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    gap: var(--base-unit);
    flex-flow: column nowrap;
    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;
`

const StyledLi = styled.li`
    width: 100%;
    display: flex;
`

const StyledNavButton = styled.button`
    width: 100%;
    padding: var(--base-unit);
    display: flex;
    justify-content: ${props => (props.showFull ? 'flex-end' : 'center')};
    align-items: center;
    background: transparent;
    border: none;
    outline: none;

    &:hover,
    &:focus {
        background-color: var(--gray-20);
        cursor: pointer;
    }

    svg {
        height: 1.5rem;
    }
`

export default function SideNav({
    setPage,
    page,
    inv,
    orders,
    showFull,
    setShowFull,
}) {
    return (
        <StyledNav showFull={showFull}>
            <StyledNavButton
                showFull={showFull}
                type="button"
                onClick={() => setShowFull(!showFull)}
            >
                {showFull ? <LeftIcon /> : <RightIcon />}
            </StyledNavButton>
            <StyledUl>
                <StyledLi>
                    <SideNavButton
                        showFull={showFull}
                        page={page}
                        active="metrics"
                        setPage={setPage}
                    >
                        <MetricsIcon />
                    </SideNavButton>
                </StyledLi>
                <StyledLi>
                    <SideNavButton
                        showFull={showFull}
                        page={page}
                        active="orders"
                        num={orders}
                        setPage={setPage}
                    >
                        <OrdersIcon />
                    </SideNavButton>
                </StyledLi>
                <StyledLi>
                    <SideNavButton
                        active="inventory"
                        page={page}
                        showFull={showFull}
                        num={inv}
                        setPage={setPage}
                    >
                        <InventoryIcon />
                    </SideNavButton>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
