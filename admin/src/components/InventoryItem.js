import styled from 'styled-components'
import { useState } from 'react'
import Trash from './Trash.js'
import { updateItem } from '../services/services.js'

const StyledLi = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    @media screen and (min-width: 1281px) {
        gap: 3rem;
    }
    border-top: 2px solid var(--gray-20);
    padding: 1rem;

    &:hover {
        background-color: var(--gray-20);
    }
`

const StyledImg = styled.img`
    max-height: 2rem;
`

const StyledName = styled.p`
    font-size: 1rem;
`

const StyledAttr = styled.p`
    font-weight: 500;
    ${props => props.grow && 'flex-grow: 1;'}
`

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 0;
    gap: 0.5rem;
`

export default function InventoryItem({
    item,
    token,
    setShowModal,
    setInv,
    inv,
}) {
    const [quantity, setQuantity] = useState(item.quantity)
    const [active, setActive] = useState(item.active)
    const [price, setPrice] = useState(item.price)

    const handleDelete = () => {
        setShowModal({
            heading: 'Confirm deletion',
            text: `Delete inventory item ${item.type}?`,
            ok: reply => {
                if (reply) setInv(inv.filter(i => i.type !== item.type))
            },
        })
    }

    const handler = (key, setter) => event => {
        setter(event.target.value)
        updateItem({ ...item, [key]: event.target.value }, token).catch(e =>
            console.log(e)
        )
    }

    const handleQuantity = handler('quantity', setQuantity)
    const handleActive = handler('active', setActive)
    const handlePrice = handler('price', setPrice)

    return (
        <StyledLi>
            <StyledImg
                src={`https://zircus.netlify.app/${item.images.sm_a}`}
                alt={item.name}
                className="inventory__item__img"
            />
            <StyledName>{item.name}</StyledName>
            <StyledAttr>{item.size}</StyledAttr>
            <StyledAttr grow={true}>{item.color}</StyledAttr>
            <StyledLabel htmlFor={`${item.id}-price`}>
                <StyledAttr>price</StyledAttr>
                <input
                    min="0"
                    step="1"
                    size="5"
                    type="number"
                    id={`${item.id}-price`}
                    value={price}
                    onChange={handlePrice}
                />
            </StyledLabel>
            <StyledLabel htmlFor={`${item.id}-quantity`}>
                <StyledAttr>quantity</StyledAttr>
                <input
                    min="0"
                    step="1"
                    size="5"
                    type="number"
                    id={`${item.id}-quantity`}
                    value={quantity}
                    onChange={handleQuantity}
                />
            </StyledLabel>
            <StyledLabel htmlFor="active">
                <StyledAttr>active</StyledAttr>
                <input
                    type="checkbox"
                    checked={active ? true : false}
                    onChange={handleActive}
                />
            </StyledLabel>
            <button
                type="button"
                className="button danger icon-button"
                onClick={handleDelete}
            >
                <Trash />
            </button>
        </StyledLi>
    )
}
