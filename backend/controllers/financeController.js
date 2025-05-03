// Calculate net earnings
exports.calculateEarnings = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    // Get total revenue from orders
    const orderRevenue = await Order.aggregate([
      { $match: { 
        orderDate: { $gte: new Date(startDate), $lte: new Date(endDate) },
        status: "completed" 
      }},
      { $group: { _id: null, total: { $sum: "$totalAmount" } }}
    ]);
    
    // Get total expenses
    const expenses = await Expense.aggregate([
      { $match: { date: { $gte: new Date(startDate), $lte: new Date(endDate) } }},
      { $group: { _id: "$category", total: { $sum: "$amount" } }}
    ]);
    
    const totalRevenue = orderRevenue[0]?.total || 0;
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.total, 0);
    const netEarnings = totalRevenue - totalExpenses;
    
    return res.json({
      totalRevenue,
      totalExpenses,
      netEarnings,
      expenseBreakdown: expenses,
      period: { startDate, endDate }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};