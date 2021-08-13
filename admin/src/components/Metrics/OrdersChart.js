import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function OrdersChart({ orders }) {
  const data = orders
    ? orders.map((order) => ({
      name: order.name,
      date: new Date(order.createdOn).toLocaleDateString(),
      total: order.total,
    }))
    : [];

  return (
    <LineChart width={500} height={400} data={data}>
      <Line type="monotone" dataKey="total" stroke="#888888" />
      <CartesianGrid stroke="#cccccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );
}
