// Menu items collection
const menuItemSchema = {
  name: String,
  nameEn: String, // English translation
  category: String, // "hot", "cold", "fastfood", etc.
  price: Number,
  description: String,
  image: String,
  available: Boolean
}

// Expenses collection
const expenseSchema = {
  date: Date,
  category: String, // "utilities", "ingredients", "staff", etc.
  amount: Number,
  description: String,
  addedBy: ObjectId
}

// Orders collection
const orderSchema = {
  orderDate: Date,
  items: [{ 
    menuItem: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  paymentMethod: String,
  status: String // "completed", "cancelled"
}

// Package deals collection
const packageSchema = {
  name: String,
  description: String,
  items: [ObjectId], // References to menu items
  price: Number,
  discount: Number,
  available: Boolean
}

// Admin users collection
const adminSchema = {
  username: String,
  password: String, // Hashed
  role: String, // "admin", "manager", etc.
  lastLogin: Date
}