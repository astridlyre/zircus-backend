import { useState } from 'react'
import InventoryItem from './InventoryItem.js'
import Spinner from './Spinner.js'
import Filter from './Filter.js'
import Page from './Page.js'

export default function Inventory({ inv, token, setShowModal, setInv }) {
    const [showFF, setShowFF] = useState(true)
    const [showPF, setShowPF] = useState(true)
    const [showCF, setShowCF] = useState(true)

    const filters = [
        {
            active: showFF,
            text: 'flat front',
            setActive: () => setShowFF(!showFF),
        },
        {
            active: showPF,
            text: 'pouch front',
            setActive: () => setShowPF(!showPF),
        },
        {
            active: showCF,
            text: 'compression front',
            setActive: () => setShowCF(!showCF),
        },
    ]

    return (
        <Page>
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
                            setInv={setInv}
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
                            setInv={setInv}
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
                            setInv={setInv}
                        />
                    ))}
                {!inv && (
                    <li id="spinner" className="spinner">
                        <Spinner />
                    </li>
                )}
            </ul>
        </Page>
    )
}
