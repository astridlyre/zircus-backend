import styled from 'styled-components'
import { useState } from 'react'
import InventoryItem from './InventoryItem.js'
import Spinner from './Spinner.js'
import Filter from './Filter.js'

const StyledPage = styled.main`
    overflow-y: scroll;
    padding-top: calc(4rem + var(--base-unit) * 2);
`

export default function Inventory({ inv, token, setShowModal, setInv }) {
    const [showFF, setShowFF] = useState(true)
    const [showPF, setShowPF] = useState(true)
    const [showCF, setShowCF] = useState(true)

    const filters = [
        {
            active: showFF,
            text: 'Flat front',
            setActive: () => setShowFF(!showFF),
        },
        {
            active: showPF,
            text: 'Pouch front',
            setActive: () => setShowPF(!showPF),
        },
        {
            active: showCF,
            text: 'Compression front',
            setActive: () => setShowCF(!showCF),
        },
    ]

    return (
        <StyledPage>
            <Filter filters={filters} />
            <ul className="inv">
                {inv &&
                    showFF &&
                    inv.ff.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                            setShowModal={setShowModal}
                            setInv={ff => setInv({ ...inv, ff })}
                            inv={inv.ff}
                        />
                    ))}
                {inv &&
                    showPF &&
                    inv.pf.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                            setShowModal={setShowModal}
                            setInv={pf => setInv({ ...inv, pf })}
                            inv={inv.pf}
                        />
                    ))}
                {inv &&
                    showCF &&
                    inv.cf.map(item => (
                        <InventoryItem
                            item={item}
                            key={item.id}
                            token={token}
                            setShowModal={setShowModal}
                            setInv={cf => setInv({ ...inv, cf })}
                            inv={inv.cf}
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
