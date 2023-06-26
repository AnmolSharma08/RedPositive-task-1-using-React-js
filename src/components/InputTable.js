import React, { useEffect, useState } from 'react';
import './InputTable.css';

function InputTable(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (props.data) {
      setDataList(props.data.filter(item => !item.deleted));
    }
  }, [props.data]);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (itemId) => {
    if (selectedRows.includes(itemId)) {
      setSelectedRows(selectedRows.filter((id) => id !== itemId));
    } else {
      setSelectedRows([...selectedRows, itemId]);
    }
  };

  const handleUpdate = () => {
    const updatedRows = dataList.map((item) => {
      if (selectedRows.includes(item.id)) {
        const updatedEntry = prompt(`Enter updated details for ID ${item.id}:`, `${item.name},${item.phone},${item.email},${item.hobby}`);
        if (updatedEntry) {
          const [name, phone, email, hobby] = updatedEntry.split(',');
          return { ...item, name, phone, email, hobby };
        }
      }
      return item;
    });

    setDataList(updatedRows);
    setSelectedRows([]);
  };

  const handleDelete = () => {
    const filteredRows = dataList.filter((item) => !selectedRows.includes(item.id));
    setDataList(filteredRows);
    setSelectedRows([]);
  };

  return (
    <div className="table-container">
      <h2>Data Table</h2>
      <table id="data-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {dataList.length > 0 ? (
            dataList.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.hobby}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available yet</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={handleUpdate} disabled={selectedRows.length === 0}>
          Update
        </button>
        <button onClick={handleDelete} disabled={selectedRows.length === 0}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default InputTable;