import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: 'Order 1',
        date: Date.now(),
    },
    {
        name: 'Order 2',
        date: Date.now(),
    },
]

export default function OrdersChart() {
    return (
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="name" stroke="#888888" />
            <CartesianGrid stroke="#cccccc" />
            <XAxis dataKey="date" />
            <YAxis />
        </LineChart>
    )
}
