import styled from 'styled-components'
import { useState } from 'react'
import InventoryItem from './InventoryItem.js'
import Spinner from './Spinner.js'

const StyledFiltersContainer = styled.div`
    position: fixed;
    right: var(--base-spacing);
    top: calc(4rem + var(--base-spacing));
    margin-left: var(--base-spacing);
    padding: var(--base-spacing);
    background-color: var(--gray-20);
    border-radius: var(--big-radius);
    display: flex;
    align-items: center;
    gap: 1rem;
`

const StyledFilters = styled.div`
    display: flex;
    gap: 1rem;
`

const StyledH3 = styled.h3`
    font-size: 1.125rem;
`

const StyledPage = styled.main`
    overflow-y: scroll;
    padding-top: 8rem;
`

export default function Inventory({ inv, token }) {
    const [showFF, setShowFF] = useState(true)
    const [showPF, setShowPF] = useState(true)
    const [showCF, setShowCF] = useState(true)

    return (
        <StyledPage>
            <StyledFiltersContainer>
                <StyledH3>Filter by</StyledH3>
                <StyledFilters>
                    <button
                        type="button"
                        className={showFF ? 'button' : 'button outline'}
                        onClick={() => setShowFF(!showFF)}
                    >
                        Flat Front
                    </button>
                    <button
                        type="button"
                        className={showPF ? 'button active' : 'button outline'}
                        onClick={() => setShowPF(!showPF)}
                    >
                        Pouch Front
                    </button>
                    <button
                        type="button"
                        className={showCF ? 'button active' : 'button outline'}
                        onClick={() => setShowCF(!showCF)}
                    >
                        Compression Front
                    </button>
                </StyledFilters>
            </StyledFiltersContainer>
            <ul className="inv">
                {inv &&
                    showFF &&
                    inv.ff.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                        />
                    ))}
                {inv &&
                    showPF &&
                    inv.pf.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                        />
                    ))}
                {inv &&
                    showCF &&
                    inv.cf.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                        />
                    ))}
                {!inv && (
                    <li id="spinner" className="spinner">
                        <Spinner />
                    </li>
                )}
            </ul>
        </StyledPage>
    )
}
