import styled from "styled-components";
import { deleteOrder, updateOrder } from "../../services/services.js";
import OrderAddress from "./OrderAddress.js";
import MediumHeader from "../Text/MediumHeader.js";
import OrderItems from "./OrderItems.js";
import Label from "../Text/Label.js";
import DeleteButton from "../Buttons/DeleteButton.js";
import { getLabel } from "../../services/services.js";

const StyledLi = styled.li`
    margin: 0 auto;
    display: flex;
    gap: var(--base-spacing);
    padding: var(--base-spacing);
    width: 100%;
    background-color: var(--gray-10);
    border-right: var(--base-unit) solid;
    border-top: 2px solid var(--gray-30);
    border-left: 2px solid var(--gray-30);
    border-bottom: 2px solid var(--gray-30);
    border-right-color: ${(props) =>
  props.hasPaid && props.hasShipped
    ? "var(--green)"
    : props.hasPaid
    ? "var(--yellow)"
    : "var(--gray-30)"};

    &:hover {
        background-color: var(--gray-05);
    }
`;

const StyledActions = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: var(--base-unit);
`;

const StyledBtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-grow: 1;
`;

export default function Order({
  order,
  token,
  setShowModal,
  setOrders,
  notify,
}) {
  const handleDeleteFailure = ({ data }) =>
    notify(`Error: ${data?.error}`, "red") && console.log(data);
  const handleDelete = () => {
    setShowModal({
      heading: "Confirm deletion",
      text: `Delete ${order.name}'s order?'`,
      color: "danger",
      btnText: "Delete",
      ok: (choice) => {
        if (choice) {
          deleteOrder(order.id, token).catch(handleDeleteFailure);
        }
      },
    });
  };

  const updatePaid = () => {
    setShowModal({
      heading: "Confirm status change",
      text: `Change ${order.name}'s order status to ${
        order.hasPaid ? "not paid" : "paid"
      }?'`,
      color: order.hasPaid ? "danger" : "positive",
      btnText: "Change",
      ok: (choice) => {
        if (choice) {
          setOrders((orders) =>
            orders.map((o) =>
              o.id === order.id ? { ...o, hasPaid: !o.hasPaid } : o
            )
          );
          updateOrder(
            {
              id: order.id,
              updatedAttributes: {
                hasPaid: !order.hasPaid,
              },
            },
            token,
          ).catch((e) => console.log(e));
        }
      },
    });
  };

  const updateShipped = () => {
    setShowModal({
      heading: "Confirm status change",
      text: `Change ${order.name}'s order status to ${
        order.hasShipped ? "not shipped" : "shipped"
      }?'`,
      color: order.hasShipped ? "danger" : "positive",
      btnText: "Change",
      ok: (choice) => {
        if (choice) {
          setOrders((orders) =>
            orders.map((o) =>
              o.id === order.id ? { ...o, hasShipped: !o.hasShipped } : o
            )
          );
          updateOrder(
            {
              id: order.id,
              updatedAttributes: {
                hasShipped: !order.hasShipped,
              },
            },
            token,
          ).catch((e) => console.log(e));
        }
      },
    });
  };

  const handleLabel = async (url) => {
    const result = await getLabel(url, token);
    const fileURL = window.URL.createObjectURL(new Blob([result.data]));
    const fURL = document.createElement("a");
    fURL.href = fileURL;
    fURL.setAttribute("download", `${order.orderId}.pdf`);
    document.body.appendChild(fURL);
    fURL.click();
    fURL.remove();
  };

  return (
    <StyledLi hasPaid={order.hasPaid} hasShipped={order.hasShipped}>
      <OrderItems order={order} />
      <OrderAddress order={order} />
      <StyledActions>
        <MediumHeader>
          {new Date(order.createdOn).toLocaleString("en-US")}
        </MediumHeader>
        <Label>
          paid:
          <input
            type="checkbox"
            checked={order.hasPaid}
            onChange={updatePaid}
          />
        </Label>
        <Label>
          shipped:
          <input
            type="checkbox"
            checked={order.hasShipped}
            onChange={updateShipped}
          />
        </Label>
        <Label>
          <button
            type="button"
            className="button"
            onClick={() => handleLabel(order.shipping.shipment.label)}
          >
            get label
          </button>
        </Label>
        <StyledBtnContainer>
          <DeleteButton onClick={handleDelete} />
        </StyledBtnContainer>
      </StyledActions>
    </StyledLi>
  );
}
