import { useState } from "react";
import axios from "axios";

import InputBar from "../components/InputBar";
import Loader from "../components/Loader";
import DashboardCharts from "../components/DashboardCharts";
import BugTable from "../components/Bugtable";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleScan = async (target) => {
    setLoading(true);
    setData(null);

    const response = await axios.post("http://localhost:5000/scan", {
      target,
    });

    setData(response.data);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bug Hunter Dashboard</h1>

      <InputBar onScan={handleScan} />

      {loading && <Loader />}

      {data && (
        <>
          <DashboardCharts summary={data.summary} />
          <BugTable bugs={data.bugs} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
