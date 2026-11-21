# Inventory Management System

A backend Inventory Management System developed using Node.js, Express.js, MongoDB and Mongoose.

## Features
- Create, Read, Update and Delete Products
- Product Schema Validation
- Search and Filter Products
- Sorting and Pagination
- Stock Adjustment (Restock and Sale)
- Low Stock Alert Report
- Category-wise Inventory Summary using Aggregation
- Centralized Error Handling

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Installation

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB
```

## Run Project

```bash
npm run dev
```

## Base URL

`http://localhost:5000/api/products`
