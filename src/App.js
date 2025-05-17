import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ChartContainer from './components/ChartContainer';
import NavTabs from './components/NavTabs';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('line');

  const handleDataLoaded = (parsedData) => {
    setData(parsedData);
  };

  return (
    <div className="app">
      <h1>Data Visualization Dashboard</h1>
      <div className="container">
        <FileUploader onDataLoaded={handleDataLoaded} />
        
        {data && (
          <>
            <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ChartContainer 
              data={data} 
              chartType={activeTab} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;