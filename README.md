# Data-Visualization-Tool
# **Data Visualization Dashboard - README**  

![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-green)  

A **React-based** web application that allows users to **upload CSV files** and visualize data using **interactive Line and Bar Charts**. Users can also **export charts as PNG images**.  


## **📌 Table of Contents**  
1. [Features](#-features)  
2. [Installation](#-installation)  
3. [Usage](#-usage)  
4. [Project Structure](#-project-structure)  
5. [Dependencies](#-dependencies)  
6. [Customization](#-customization)  
7. [Troubleshooting](#-troubleshooting)  

---

## **✨ Features**  
✅ **CSV File Upload** – Supports any `.csv` file without preprocessing.  
📊 **Interactive Charts** – Toggle between **Line** and **Bar** charts.  
🖼️ **Export as PNG** – Download charts as high-quality images.  
📱 **Responsive Design** – Works on desktop and mobile.  

---

## **⚙️ Installation**  
### **Prerequisites**  
- Node.js (v16 or later)  
- npm (v8 or later)  

### **Steps**  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/data-visualization-app.git
   cd data-visualization-app
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Run the app**  
   ```bash
   npm start
   ```
4. **Open in browser**  
   Visit `http://localhost:3000`  

---

## **🚀 Usage**  
1. **Upload a CSV file**  
   - Click **"Choose CSV File"** and select a dataset.  
   - Example CSV format:  
     ```csv
     Month,Revenue,Expenses
     January,10000,4000
     February,12000,5000
     March,15000,6000
     ```
2. **Switch between charts**  
   - Toggle between **Line Chart** and **Bar Chart** using the tabs.  
3. **Export as PNG**  
   - Click **"Export as PNG"** to download the chart.  

---

## **📂 Project Structure**  
```
data-visualization-app/
├── node_modules/       # Dependencies
├── public/            # Static files
├── src/
│   ├── components/    # React components
│   │   ├── FileUploader.jsx  # CSV upload handler
│   │   ├── ChartContainer.jsx # Chart display & export
│   │   └── NavTabs.jsx       # Chart type switcher
│   ├── App.js         # Main app logic
│   ├── App.css        # Styling
│   └── index.js       # React entry point
├── package.json       # Project dependencies
└── README.md          # Documentation
```

---

## **📦 Dependencies**  
| Package | Purpose |
|---------|---------|
| `react` | Frontend framework |
| `react-chartjs-2` | React wrapper for Chart.js |
| `chart.js` | Data visualization library |
| `papaparse` | CSV file parsing |
| `file-saver` | PNG export functionality |

---

## **🎨 Customization**  
### **1. Add More Chart Types**  
Modify `ChartContainer.jsx` to include:  
- Pie charts  
- Scatter plots  
- Radar charts  

### **2. Add Data Filtering**  
Let users select which columns to display.  

### **3. Dark Mode Support**  
Add a theme toggle in `App.js`.  

---

## **🔧 Troubleshooting**  
| Issue | Solution |
|-------|----------|
| `npm start` fails | Ensure Node.js v16+ is installed |
| Charts not rendering | Check CSV format (first column = labels) |
| Export not working | Ensure `file-saver` is installed |

---
