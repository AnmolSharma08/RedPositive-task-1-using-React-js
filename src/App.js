import React, { useState } from 'react';
import InputForm from './components/InputForm.js';
import InputTable from './components/InputTable.js';

function App() {
  const [data, setData] = useState([]);

  const handleData = (formData) => {
    const newData = {
      ...formData,
      id: data.length + 1
    };

    setData([...data, newData]);
  };

  return (
    <div>
      <InputForm DataComing={handleData} />
      <InputTable data={data} />
    </div>
  );
}

export default App;
