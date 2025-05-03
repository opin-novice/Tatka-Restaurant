import React, { useState, useEffect } from 'react';
import { LineChart, BarChart } from './Charts';
import { fetchEarnings } from '../api/finance';

const AdminDashboard = () => {
  const [earningsData, setEarningsData] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30*24*60*60*1000),
    endDate: new Date()
  });
  
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEarnings(dateRange.startDate, dateRange.endDate);
      setEarningsData(data);
    };
    loadData();
  }, [dateRange]);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-2xl">৳{earningsData?.totalRevenue || 0}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Expenses</h3>
          <p className="text-2xl">৳{earningsData?.totalExpenses || 0}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Net Earnings</h3>
          <p className="text-2xl">৳{earningsData?.netEarnings || 0}</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
        <LineChart data={earningsData} />
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>
        <BarChart data={earningsData?.expenseBreakdown || []} />
      </div>
    </div>
  );
};

export default AdminDashboard;