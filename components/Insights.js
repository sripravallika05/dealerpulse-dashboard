export default function Insights({ leads }) {

  // 🔹 Find stale leads (>7 days not updated)
  const staleLeads = leads.filter(l => {
    if (!l.status_history || l.status_history.length === 0) return false;

    const lastUpdate = new Date(
      l.status_history[l.status_history.length - 1].date
    );

    const days = (new Date() - lastUpdate) / (1000 * 60 * 60 * 24);

    return days > 7 && l.status !== "delivered";
  });

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>🚨 Actionable Insights</h3>

      {staleLeads.length > 0 ? (
        <div style={{ background: "#ffe6e6", padding: "15px", borderRadius: "10px" }}>
          ⚠️ {staleLeads.length} leads not contacted in 7+ days
        </div>
      ) : (
        <p>✅ No critical issues</p>
      )}
    </div>
  );
}