export default function KPIcards({ leads }) {
  const totalLeads = leads.length;

  const delivered = leads.filter(l => l.status === "delivered").length;

  const revenue = leads
    .filter(l => l.status === "delivered")
    .reduce((sum, l) => sum + (l.price || 0), 0);

  const conversionRate =
    totalLeads > 0 ? ((delivered / totalLeads) * 100).toFixed(1) : 0;
  const target = 10;
  const achieved = delivered;
  const percent = ((achieved / target) * 100).toFixed(1);
  <Card
  title="Target Progress"
  value={`${achieved}/${target} (${percent}%)`}
/>

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <Card title="Total Leads" value={totalLeads} />
      <Card title="Sales" value={delivered} />
      <Card title="Revenue" value={`₹${revenue}`} />
      <Card title="Conversion %" value={`${conversionRate}%`} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      padding: "20px",
      background: "#f5f5f5",
      borderRadius: "10px",
      width: "150px"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}