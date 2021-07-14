import { useState } from 'react'
import styled from 'styled-components'
import RightIcon from './RightIcon.js'
import LeftIcon from './LeftIcon.js'
import InventoryIcon from './InventoryIcon.js'
import OrdersIcon from './OrdersIcon.js'
import MetricsIcon from './MetricsIcon.js'

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

const StyledButton = styled.button`
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${props => props.showFull && 'gap: calc(var(--base-unit) * 1.5);'}
    justify-content: ${props => (props.showFull ? 'left' : 'center')};
    ${props => !props.showFull && 'padding: var(--input-padding);'}

    svg {
        height: 1.25rem;
    }
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
                    <StyledButton
                        showFull={showFull}
                        className={
                            page === 'inventory' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('inventory')}
                    >
                        <InventoryIcon />
                        {showFull && `Inventory (${inv})`}
                    </StyledButton>
                </StyledLi>
                <StyledLi>
                    <StyledButton
                        showFull={showFull}
                        className={
                            page === 'orders' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('orders')}
                    >
                        <OrdersIcon />
                        {showFull && `Orders (${orders})`}
                    </StyledButton>
                </StyledLi>
                <StyledLi>
                    <StyledButton
                        showFull={showFull}
                        className={
                            page === 'metrics' ? 'button' : 'button outline'
                        }
                        onClick={() => setPage('metrics')}
                    >
                        <MetricsIcon />
                        {showFull && 'Metrics'}
                    </StyledButton>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
