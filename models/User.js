const { pgTable, serial, text } = require('drizzle-orm/pg-core');
const db = require('../config/db');

// Define the User table schema
const User = pgTable('users', {
  id: serial('id').primaryKey(), // Serial primary key column
  name: text('name').notNull(), // Text column for name
  email: text('email').notNull().unique(), // Unique text column for email
});

// Function to create a new user
const createUser = async (userData) => {
  try {
    const result = await db.insert(User).values(userData).returning(); // Insert the user data into the User table
    return result[0]; // Return the first (and only) row of the result
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Function to get a user by ID
const getUserById = async (id) => {
  try {
    const result = await db.select().from(User).where(User.id.eq(id)); // Select the user with the given ID
    return result[0]; // Return the first (and only) row of the result
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

module.exports = {
  User,
  createUser,
  getUserById,
};
