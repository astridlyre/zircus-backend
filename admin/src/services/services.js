import axios from "axios";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

const getData = async res => await res.data;

const API_ENDPOINT = "https://zircus.herokuapp.com/api";
// const API_ENDPOINT = "http://localhost:3000/api";

export async function login(username, password) {
  return await axios
    .post(`${API_ENDPOINT}/login`, {
      username,
      password,
    })
    .then(getData);
}

export async function getInv() {
  return await axios.get(`${API_ENDPOINT}/inv`).then(getData);
}

export async function getOrders() {
  return await axios.get(`${API_ENDPOINT}/orders`).then(getData);
}

export async function updateOrder(order) {
  return await axios
    .put(`${API_ENDPOINT}/orders/${order.id}`, order)
    .then(getData);
}

export async function deleteOrder(id) {
  return await axios.delete(`${API_ENDPOINT}/orders/${id}`).then(getData);
}

export async function updateItem(item) {
  return await axios.put(`${API_ENDPOINT}/inv`, item).then(getData);
}

export async function getMessages() {
  return await axios.get(`${API_ENDPOINT}/message`).then(getData);
}

export async function deleteMessage(id) {
  return await axios.delete(`${API_ENDPOINT}/message/${id}`).then(getData);
}

export async function getLabel(url) {
  return await axios
    .post(
      `${API_ENDPOINT}/orders/label`,
      { url },
      {
        responseType: "blob",
      }
    )
    .then(getData);
}
