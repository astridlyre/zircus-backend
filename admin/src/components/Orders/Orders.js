import { useState } from "react";
import Order from "./Order.js";
import Filter from "../Filter/Filter.js";
import Page from "../Containers/Page.js";
import List from "../Containers/List.js";
import { useField } from "../../hooks/hooks.js";

export default function Orders({ orders, setShowModal, setOrders, notify }) {
  const [dateStart] = useField("date", "");
  const [dateEnd] = useField("date", "");
  const [showShipped, setShowShipped] = useState(false);
  const [showPaid, setShowPaid] = useState(true);
  const filters = [
    {
      active: showShipped,
      text: "shipped",
      setActive: () => setShowShipped(state => !state),
    },
    {
      active: showPaid,
      text: "paid",
      setActive: () => setShowPaid(state => !state),
    },
  ];

  const filterDates = order => {
    const start = dateStart.value;
    const end = dateEnd.value;
    if (!start && !end) return true;
    const orderTime = new Date(order.createdOn).getTime();
    if (!start) {
      return orderTime <= new Date(end).getTime();
    }
    if (!end) {
      return orderTime >= new Date(start).getTime();
    }
    return (
      orderTime >= new Date(start).getTime() &&
      orderTime <= new Date(end).getTime()
    );
  };
  const filterPaid = order => order.hasPaid === showPaid;
  const filterShipped = order => order.hasShipped === showShipped;
  const ordersToShow =
    orders &&
    orders.filter(filterPaid).filter(filterShipped).filter(filterDates);

  return (
    <Page padTop={true}>
      <Filter filters={filters} dateStart={dateStart} dateEnd={dateEnd} />
      <List gap={true}>
        {orders &&
          ordersToShow.map(order => (
            <Order
              notify={notify}
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
