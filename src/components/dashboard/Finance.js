import React, { useState } from "react";

const FinanceTable = ({ data, onCreate, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    bankAccount: "",
    accountName: "",
    income: 0,
    expenses: 0,
    assets: 0,
    liabilities: 0,
  });

  const handleEdit = (id) => {
    setEditingId(id);
    const editItem = data.find((item) => item.id === id);
    setFormData({ ...editItem });
  };

  const handleSave = () => {
    if (editingId) {
      onUpdate(editingId, formData);
    } else {
      onCreate(formData);
    }
    setEditingId(null);
    setFormData({
      bankAccount: "",
      accountName: "",
      income: 0,
      expenses: 0,
      assets: 0,
      liabilities: 0,
    });
  };

  const handleDelete = (id) => {
    onDelete(id);
    setEditingId(null);
    setFormData({
      bankAccount: "",
      accountName: "",
      income: 0,
      expenses: 0,
      assets: 0,
      liabilities: 0,
    });
  };

  return (
    <div style={{ width: "80%", padding: "20px" }}>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Bank Account</th>
            <th>Account Name</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Assets</th>
            <th>Liabilities</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.bankAccount}</td>
              <td>{item.accountName}</td>
              <td>{item.income}</td>
              <td>{item.expenses}</td>
              <td>{item.assets}</td>
              <td>{item.liabilities}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <h3>{editingId ? "Edit Entry" : "Add New Entry"}</h3>
        <label>Bank Account:</label>
        <input
          type="text"
          value={formData.bankAccount}
          onChange={(e) =>
            setFormData({ ...formData, bankAccount: e.target.value })
          }
        />
        <label>Account Name:</label>
        <input
          type="text"
          value={formData.accountName}
          onChange={(e) =>
            setFormData({ ...formData, accountName: e.target.value })
          }
        />
        <label>Income:</label>
        <input
          type="number"
          value={formData.income}
          onChange={(e) =>
            setFormData({ ...formData, income: parseInt(e.target.value, 10) })
          }
        />
        <label>Expenses:</label>
        <input
          type="number"
          value={formData.expenses}
          onChange={(e) =>
            setFormData({ ...formData, expenses: parseInt(e.target.value, 10) })
          }
        />
        <label>Assets:</label>
        <input
          type="number"
          value={formData.assets}
          onChange={(e) =>
            setFormData({ ...formData, assets: parseInt(e.target.value, 10) })
          }
        />
        <label>Liabilities:</label>
        <input
          type="number"
          value={formData.liabilities}
          onChange={(e) =>
            setFormData({
              ...formData,
              liabilities: parseInt(e.target.value, 10),
            })
          }
        />
        <button onClick={handleSave}>
          {editingId ? "Save Changes" : "Add Entry"}
        </button>
      </div>
    </div>
  );
};

export default FinanceTable;
