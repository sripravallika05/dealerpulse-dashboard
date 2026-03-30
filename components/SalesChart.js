import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function SalesChart({ leads }) {
  const branchMap = {};

  leads.forEach(l => {
    if (!branchMap[l.branch]) {
      branchMap[l.branch] = 0;
    }
    if (l.status === "delivered") {
      branchMap[l.branch]++;
    }
  });

  const chartData = Object.keys(branchMap).map(branch => ({
    branch,
    sales: branchMap[branch]
  }));

  return (
    <div style={{ marginTop: "40px", height: "300px" }}>
      <h3>Sales by Branch</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="branch" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}