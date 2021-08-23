import styled from "styled-components";
import Page from "../Containers/Page.js";
import OrdersChart from "./OrdersChart.js";

const StyledContainer = styled.div`
    display: flex;
    ${(props) =>
  props.flow ? `flex-flow: ${props.flow};` : "flex-flow: row wrap;"}
    gap: var(--base-spacing);
    margin-top: var(--base-spacing);
    width: 100%;
    align-items: flex-start;
    max-width: var(--screen-md);
`;

const StyledBubble = styled.div`
    background-color: var(--gray-10);
    border-radius: var(--radius);
    flex-basis: 12rem;
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    overflow: hidden;
    margin-bottom: var(--lg-spacing);
    padding-bottom: var(--base-spacing);

    :hover {
      background-color: var(--gray-05);
    }

    h3 {
        background-color: var(--dgray-80);
        color: var(--gray-10);
        width: 100%;
        padding: var(--base-unit) var(--base-spacing);
        margin-bottom: var(--base-spacing);
    }
`;

const StyledOrdersNum = styled.span`
    height: 100%;
    font-size: var(--md-font-size);
    line-height: 1.8;
    padding: 0 var(--base-spacing);
`;

const StyledItems = styled.ul`
    width: 100%;
    padding: var(--base-spacing) !important;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-30);
        padding: var(--base-unit);
    }
`;

export default function Metrics({ orders, inv, messages }) {
  const invFlat = (inv && Object.values(inv).flat()) || [];
  return (
    <Page pad={true}>
      <StyledContainer flow="row wrap">
        <StyledBubble>
          <h3>orders</h3>
          <StyledOrdersNum>
            pending: {orders &&
              orders.reduce(
                (acc, order) =>
                  !order.hasPaid && !order.hasShipped ? acc + 1 : acc,
                0,
              )}
          </StyledOrdersNum>
          <StyledOrdersNum>
            paid: {orders &&
              orders.reduce((acc, order) => order.hasPaid ? acc + 1 : acc, 0)}
          </StyledOrdersNum>
          <StyledOrdersNum>
            shipped: {orders &&
              orders.reduce(
                (acc, order) =>
                  order.hasPaid && order.hasShipped ? acc + 1 : acc,
                0,
              )}
          </StyledOrdersNum>
        </StyledBubble>
        <StyledBubble>
          <h3>messages</h3>
          <StyledOrdersNum>
            total: {messages && messages.length}
          </StyledOrdersNum>
        </StyledBubble>
        <StyledBubble>
          <h3>low stock</h3>
          <StyledItems>
            {invFlat.map(
              (item) =>
                item.quantity < 5 && (
                  <li key={item.type}>
                    <span>{item.type}</span>
                    <span>{item.quantity}</span>
                  </li>
                ),
            )}
          </StyledItems>
        </StyledBubble>
      </StyledContainer>
      <StyledContainer flow="column nowrap">
        <h2>Recent Orders</h2>
        <OrdersChart orders={orders} />
      </StyledContainer>
    </Page>
  );
}
