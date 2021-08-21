import styled from "styled-components";
import Label from "../Text/Label.js";
import DeleteButton from "../Buttons/DeleteButton.js";
import { updateItem } from "../../services/services.js";

const StyledLi = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    @media screen and (min-width: 1281px) {
        gap: 3rem;
    }
    border-top: 2px solid var(--gray-20);
    border-left: 2px solid var(--gray-20);
    border-right: 2px solid var(--gray-20);
    padding: 1rem;

    &:hover {
        background-color: var(--gray-20);
    }
`;

const StyledImg = styled.img`
    max-height: 2rem;
`;

const StyledName = styled.p`
    font-size: 1rem;
`;

const StyledAttr = styled.p`
    font-weight: 500;
    ${(props) => props.grow && "flex-grow: 1;"}
`;

export default function InventoryItem({ item, token, setInv }) {
  const handler = (key, fn) =>
    (event) => {
      setInv((inv) =>
        inv.map((i) => i.id === item.id ? { ...i, [key]: fn(event.target) } : i)
      );
      console.log("setting");
      updateItem({ ...item, [key]: fn(event.target) }, token).catch((e) =>
        console.log(e)
      );
    };

  const handleQuantity = handler("quantity", (t) => Number(t.value));
  const handleActive = handler("active", (t) => t.checked);
  const handlePrice = handler("price", (t) => Number(t.value));

  return (
    <StyledLi>
      <StyledImg
        src={`https://zircus.netlify.app/${item.images.sm_a}`}
        alt={item.name}
        className="inventory__item__img"
      />
      <StyledName>{item.name.en}</StyledName>
      <StyledAttr>{item.size}</StyledAttr>
      <StyledAttr grow={true}>{item.color}</StyledAttr>
      <Label htmlFor={`${item.id}-price`}>
        <StyledAttr>price</StyledAttr>
        <input
          min="0"
          step="1"
          size="5"
          type="number"
          id={`${item.id}-price`}
          value={item.price}
          onChange={handlePrice}
        />
      </Label>
      <Label htmlFor={`${item.id}-quantity`}>
        <StyledAttr>quantity</StyledAttr>
        <input
          min="0"
          step="1"
          size="5"
          type="number"
          id={`${item.id}-quantity`}
          value={item.quantity}
          onChange={handleQuantity}
        />
      </Label>
      <Label htmlFor="active">
        <StyledAttr>active</StyledAttr>
        <input
          type="checkbox"
          checked={item.active}
          onChange={handleActive}
        />
      </Label>
    </StyledLi>
  );
}
