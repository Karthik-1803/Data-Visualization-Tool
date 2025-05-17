import React from 'react';

const NavTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="nav-tabs">
      <button
        className={`tab-button ${activeTab === 'line' ? 'active' : ''}`}
        onClick={() => setActiveTab('line')}
      >
        Line Chart
      </button>
      <button
        className={`tab-button ${activeTab === 'bar' ? 'active' : ''}`}
        onClick={() => setActiveTab('bar')}
      >
        Bar Chart
      </button>
    </div>
  );
};

export default NavTabs;