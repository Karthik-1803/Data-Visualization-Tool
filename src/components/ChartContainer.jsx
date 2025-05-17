import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { saveAs } from 'file-saver';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = ({ data, chartType }) => {
  if (!data || data.length === 0) return null;

  // Extract headers (assuming first row contains headers)
  const headers = Object.keys(data[0]);
  if (headers.length < 2) {
    return <p>CSV file needs at least two columns for visualization.</p>;
  }

  // Prepare chart data
  const labels = data.map((item) => item[headers[0]]);
  const datasets = headers.slice(1).map((header, idx) => ({
    label: header,
    data: data.map((item) => parseFloat(item[header]) || 0),
    backgroundColor: `hsl(${(idx * 360) / headers.length}, 70%, 50%)`,
    borderColor: `hsl(${(idx * 360) / headers.length}, 70%, 50%)`,
    borderWidth: 2,
    tension: 0.1,
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Data Visualization - ${chartType === 'line' ? 'Line Chart' : 'Bar Chart'}`,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  const handleExport = () => {
    const canvas = document.getElementById('chart-canvas');
    if (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, `${chartType}-chart.png`);
      });
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        {chartType === 'line' ? (
          <Line 
            id="chart-canvas"
            data={chartData} 
            options={options} 
          />
        ) : (
          <Bar 
            id="chart-canvas"
            data={chartData} 
            options={options} 
          />
        )}
      </div>
      <button onClick={handleExport} className="export-button">
        Export as PNG
      </button>
    </div>
  );
};

export default ChartContainer;