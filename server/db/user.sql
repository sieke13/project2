CREATE TABLE users (
  id SERIAL PRIMARY KEY,         -- Auto-incrementing primary key
  email VARCHAR(255) UNIQUE NOT NULL,  -- Unique email address
  password VARCHAR(255) NOT NULL,     -- Hashed password
  name VARCHAR(255),               -- Full name (optional)
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Automatically set to the current timestamp
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Automatically set to the current timestamp
);
