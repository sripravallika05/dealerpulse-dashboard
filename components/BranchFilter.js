export default function BranchFilter({ branch, setBranch, data }) {
  const branches = ["All", ...new Set(data.leads.map(l => l.branch))];

  return (
    <div style={{ marginTop: "20px" }}>
      <label>Select Branch: </label>
      <select value={branch} onChange={(e) => setBranch(e.target.value)}>
        {branches.map((b, i) => (
          <option key={i}>{b}</option>
        ))}
      </select>
    </div>
  );
}