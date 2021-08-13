import { useRef, useState } from "react";
import styled from "styled-components";
import Order from "./Order.js";
import Filter from "../Filter/Filter.js";
import Page from "../Containers/Page.js";
import List from "../Containers/List.js";
import { useField } from "../../hooks/hooks.js";

const StyledLabel = styled.label`
  display: flex;
  gap: var(--base-unit);
  align-items: center;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  gap: var(--base-spacing);
  margin-bottom: var(--base-spacing);
`;

export default function Orders({
  orders,
  token,
  setShowModal,
  setOrders,
  notify,
}) {
  const [dateStart, clearDateStart] = useField(
    "date",
    "",
  );
  const [dateEnd, clearDateEnd] = useField(
    "date",
    "",
  );
  const [filter, setFilter] = useState(["hasPaid"]);
  const filters = [
    {
      active: filter.includes("hasShipped"),
      text: "shipped",
      setActive: () =>
        filter.includes("hasShipped")
          ? setFilter((filter) => filter.filter((f) => f !== "hasShipped"))
          : setFilter((filter) => filter.concat("hasShipped")),
    },
    {
      active: filter.includes("hasPaid"),
      text: "paid",
      setActive: () =>
        filter.includes("hasPaid")
          ? setFilter((filter) => filter.filter((f) => f !== "hasPaid"))
          : setFilter((filter) => filter.concat("hasPaid")),
    },
  ];
  const filterOrder = (order) => {
    if (!filter.length) return true;
    for (const f of filter) if (!order[f]) return false;
    return true;
  };
  const ordersToShow = orders && orders.filter(filterOrder);
  return (
    <Page padTop={true}>
      <StyledLabelContainer>
        <StyledLabel htmlFor="dateStart">
          <span>Date Start</span>
          <input {...dateStart} id="dateStart" />
        </StyledLabel>
        <StyledLabel htmlFor="dateEnd">
          <span>Date End</span>
          <input {...dateEnd} id="dateEnd" />
        </StyledLabel>
      </StyledLabelContainer>
      <Filter filters={filters} />
      <List gap={true}>
        {orders &&
          ordersToShow.map((order) => (
            <Order
              notify={notify}
              token={token}
              order={order}
              key={order.id}
              setShowModal={setShowModal}
              setOrders={setOrders}
            />
          ))}
      </List>
    </Page>
  );
}
