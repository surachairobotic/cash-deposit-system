require('dotenv').config(); // Load environment variables from .env file

const { Pool } = require('pg'); // Import the pg client
const { drizzle } = require('drizzle-orm/node-postgres'); // Import drizzle-orm for pg

// Create a new pool instance with connection details
const pool = new Pool({
  connectionString: process.env.DB_URL || 'postgres://username:password@localhost:5432/cash_deposit_system',
  // ssl: { rejectUnauthorized: false } // Uncomment this line if using SSL in production
});

// Create drizzle client using pg pool
const db = drizzle(pool);

module.exports = db;