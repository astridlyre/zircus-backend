import axios from "axios";

const authHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const getData = async (res) => await res.data;

// const API_ENDPOINT = "https://zircus.herokuapp.com/api";
const API_ENDPOINT = "http://localhost:3000/api";

export async function login(username, password) {
  return await axios.post(`${API_ENDPOINT}/login`, {
    username,
    password,
  }).then(getData);
}

export async function getInv() {
  return await axios.get(`${API_ENDPOINT}/inv`).then(getData);
}

export async function getOrders(token) {
  return await axios.get(`${API_ENDPOINT}/orders`, authHeader(token)).then(
    getData,
  );
}

export async function updateOrder(order, token) {
  return await axios.put(
    `${API_ENDPOINT}/orders/${order.id}`,
    order,
    authHeader(token),
  ).then(getData);
}

export async function deleteOrder(id, token) {
  return await axios.delete(`${API_ENDPOINT}/orders/${id}`, authHeader(token))
    .then(getData);
}

export async function updateItem(item, token) {
  return await axios.put(`${API_ENDPOINT}/inv`, item, authHeader(token)).then(
    getData,
  );
}

export async function getMessages(token) {
  return await axios.get(`${API_ENDPOINT}/message`, authHeader(token)).then(
    getData,
  );
}

export async function deleteMessage(id, token) {
  return await axios.delete(
    `${API_ENDPOINT}/message/${id}`,
    authHeader(token),
  ).then(getData);
}

export async function getLabel(url, token) {
  return await axios.post(
    `${API_ENDPOINT}/orders/label`,
    { url },
    {
      responseType: "blob",
      ...authHeader(token),
    },
  ).then(getData);
}
