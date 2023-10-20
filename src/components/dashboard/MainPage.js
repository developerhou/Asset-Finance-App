import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FinanceTable from "./Finance";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      bankAccount: "1234",
      accountName: "John Doe",
      income: 5000,
      expenses: 3000,
      assets: 10000,
      liabilities: 5000,
    },
    {
      id: 2,
      bankAccount: "5678",
      accountName: "Jane Doe",
      income: 7000,
      expenses: 4000,
      assets: 15000,
      liabilities: 6000,
    },
  ]);

  const handleCreate = (newData) => {
    setData([...data, { id: data.length + 1, ...newData }]);
  };

  const handleUpdate = (id, updatedData) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <FinanceTable
        data={data}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Dashboard;
