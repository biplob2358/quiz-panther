import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../components/useChart";

const Statistics = () => {
  const [chart] = useChart();

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-96 mb-8">
          <h1 className="text-center text-3xl text-blue-800">Total question</h1>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chart}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#4700D8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
