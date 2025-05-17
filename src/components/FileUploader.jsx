import React from 'react';
import Papa from 'papaparse';

const FileUploader = ({ onDataLoaded }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          onDataLoaded(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          alert('Error parsing CSV file. Please check the file format.');
        }
      });
    }
  };

  return (
    <div className="file-uploader">
      <h2>Upload Your Dataset</h2>
      <div className="upload-area">
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFileUpload}
          id="csv-upload"
        />
        <label htmlFor="csv-upload" className="upload-button">
          Choose CSV File
        </label>
        <p className="file-format">Supports .csv files only</p>
      </div>
    </div>
  );
};

export default FileUploader;