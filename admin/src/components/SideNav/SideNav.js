import styled from "styled-components";
import RightIcon from "../Icons/RightIcon.js";
import LeftIcon from "../Icons/LeftIcon.js";
import InventoryIcon from "../Icons/InventoryIcon.js";
import OrdersIcon from "../Icons/OrdersIcon.js";
import MetricsIcon from "../Icons/MetricsIcon.js";
import MessagesIcon from "../Icons/MessagesIcon.js";
import SideNavButton from "./SideNavButton.js";

const StyledNav = styled.nav`
    position: fixed;
    top: 4rem;
    left: 0;
    bottom: 0;
    z-index: 5;
    width: ${(props) => (props.showFull ? "14rem" : "4rem")};
    border-right: 2px solid var(--gray-30);
    background-color: var(--gray-10);
    box-shadow: 3px 0px 6px 0 rgba(23, 23, 22, 0.02), 
      5px 0px 6px 0 rgba(23, 23, 21, 0.057);
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    gap: var(--base-unit);
    flex-flow: column nowrap;
    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;
`;

const StyledLi = styled.li`
    width: 100%;
    display: flex;
`;

const StyledNavButton = styled.button`
    width: 100%;
    padding: var(--base-unit);
    display: flex;
    justify-content: ${(props) => (props.showFull ? "flex-end" : "center")};
    align-items: center;
    background: transparent;
    border: none;
    outline: none;

    &:hover {
        background-color: var(--gray-05);
        cursor: pointer;
    }

    svg {
        height: 1.5rem;
    }
`;

export default function SideNav({
  setPage,
  page,
  inv,
  orders,
  showFull,
  setShowFull,
  messages,
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
        <StyledLi>
          <SideNavButton
            active="messages"
            page={page}
            showFull={showFull}
            num={messages}
            setPage={setPage}
          >
            <MessagesIcon />
          </SideNavButton>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
