import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Modal from "./components/Modal/Modal.js";
import { useContext, useEffect, useState } from "react";
import { getInv, getMessages, getOrders } from "./services/services.js";
import { WebsocketContext } from "./services/Websocket.js";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [inv, setInv] = useState([]);
  const [messages, setMessages] = useState(null);
  const [orders, setOrders] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [notification, setNotification] = useState(null);
  const [websocketId, setWebsocketId] = useState(-1);
  const { addListener, removeListener } = useContext(WebsocketContext);

  const updateMessages = ({ text, color }) => {
    notify(text, color);
    getMessages()
      .then(reply => setMessages(reply.messages))
      .catch(() => setMessages(null));
  };

  const updateOrders = ({ text, color }) => {
    notify(text, color);
    getInv()
      .then(reply => setInv(reply))
      .catch(() => setInv([]));
    getOrders()
      .then(reply => setOrders(reply))
      .catch(() => setOrders(null));
  };

  const initWebsocketListener = () => {
    const websocketListenerId = addListener(message => {
      if (!token) return;
      switch (message.type) {
        case "message":
          return updateMessages({
            text: `New message from ${message.data.name}`,
            color: "green",
          });
        case "pending order":
          return updateOrders({
            text: `Pending order from ${message.data.name}`,
            color: "gray",
          });
        case "paid order":
          return updateOrders({
            text: `Paid order from ${message.data.name}`,
            color: "green",
          });
        case "deleted order":
          return updateOrders({
            text: `${message.data.response}: Inventory updated`,
            color: "green",
          });
        default:
          console.error(`Unknown message type: ${message.type}`);
      }
    });
    setWebsocketId(websocketListenerId);
  };

  const onComponentDestroy = () => {
    removeListener(websocketId);
    setWebsocketId(-1);
  };

  const notify = (text, style) => {
    if (notification && notification.self) clearTimeout(notification.self);
    const self = setTimeout(() => setNotification(null), 4500);
    setNotification({ text, style, self });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    getInv()
      .then(reply => setInv(reply))
      .catch(() => setInv([]));
    if (token !== null) {
      getOrders()
        .then(reply => {
          setOrders(reply);
        })
        .catch(() => setOrders(null));
      getMessages()
        .then(reply => setMessages(reply.messages))
        .catch(() => setMessages(null));
    }
    initWebsocketListener();
    return onComponentDestroy;
  }, [setInv, token]);

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      {token ? (
        <Dashboard
          notification={notification}
          notify={notify}
          inv={inv}
          orders={orders}
          logout={logout}
          setShowModal={setShowModal}
          setOrders={setOrders}
          setInv={setInv}
          user={user}
          messages={messages}
          setMessages={setMessages}
        />
      ) : (
        <Login setUser={setUser} setToken={setToken} />
      )}
    </Modal>
  );
}

export default App;
