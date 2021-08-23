import styled from "styled-components";

const StyledTotal = styled.p`
    margin-top: auto;
    text-align: right;
    font-weight: 600;
`;

const StyledImg = styled.img`
  width: var(--md-spacing);
  object-fit: contain;
`;

const StyledItems = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 14rem;
    border-right: 2px solid var(--gray-30);
    padding-right: var(--base-spacing);
`;

const StyledLi = styled.li`
  display: flex;
  gap: var(--base-spacing);
  align-items: center;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
`;

export default function OrderItems({ order }) {
  return (
    <StyledItems>
      <StyledUl>
        {order.items.map((item) => (
          <StyledLi key={item.type}>
            <StyledImg src={`https://zircus.netlify.app${item.image}`} />
            <span>{item.type} x{item.quantity}</span>
          </StyledLi>
        ))}
      </StyledUl>
      <StyledTotal>total ${order.total.toFixed(2)}</StyledTotal>
    </StyledItems>
  );
}
