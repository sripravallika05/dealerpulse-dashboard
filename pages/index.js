import { useState, useMemo } from "react";
import data from "../data/dealership_data.json";

import KPIcards from "../components/KPIcards";
import BranchFilter from "../components/BranchFilter";
import SalesChart from "../components/SalesChart";
import Insights from "../components/Insights";

export default function Home() {
  const [branch, setBranch] = useState("All");

  // 🔹 Filter Leads
  const filteredLeads = useMemo(() => {
    if (branch === "All") return data.leads;
    return data.leads.filter(l => l.branch === branch);
  }, [branch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚗 DealerPulse Dashboard</h1>

      <BranchFilter branch={branch} setBranch={setBranch} data={data} />

      <KPIcards leads={filteredLeads} />

      <SalesChart leads={filteredLeads} />

      <Insights leads={filteredLeads} />
    </div>
  );
}