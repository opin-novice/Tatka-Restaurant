// Auth routes
app.post('/api/auth/login', authController.login);
app.post('/api/auth/logout', authMiddleware, authController.logout);

// Menu routes
app.get('/api/menu', menuController.getAllItems);
app.get('/api/menu/:category', menuController.getItemsByCategory);
app.post('/api/menu', authMiddleware, menuController.addItem);
app.put('/api/menu/:id', authMiddleware, menuController.updateItem);

// Order routes
app.post('/api/orders', orderController.createOrder);
app.get('/api/orders', authMiddleware, orderController.getAllOrders);
app.get('/api/orders/stats', authMiddleware, orderController.getOrderStats);

// Expense routes
app.post('/api/expenses', authMiddleware, expenseController.addExpense);
app.get('/api/expenses', authMiddleware, expenseController.getAllExpenses);
app.get('/api/expenses/summary', authMiddleware, expenseController.getExpenseSummary);

// Financial routes
app.get('/api/finance/dashboard', authMiddleware, financeController.getDashboardData);
app.get('/api/finance/earnings', authMiddleware, financeController.calculateEarnings);