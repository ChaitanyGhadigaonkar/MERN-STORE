import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  return (
    <div className="my-10 mx-10">
      <h1 className="text-xl font-bold ">Dashboard</h1>
      <LineChart
        width={400}
        height={400}
        data={{ name: "chaitany Ghadigoankar" }}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ff7300"
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#387908"
          yAxisId={1}
        />
      </LineChart>
    </div>
  );
};

export default Dashboard;
