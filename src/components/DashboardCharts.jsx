import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DashboardCharts = ({ summary }) => {
  const data = [
    { name: "Critical", value: summary.critical },
    { name: "Medium", value: summary.medium },
    { name: "Low", value: summary.low },
  ];

  const COLORS = ["#dc2626", "#facc15", "#22c55e"];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DashboardCharts;
