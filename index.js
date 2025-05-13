
// Import required modules
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// POST API endpoint
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Validate request body
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  res.status(201).json({
    message: 'User created successfully',
    user: { name, email }
  });
});

// PUT API endpoint
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  // Validate request body
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  res.json({
    message: `User ${id} updated successfully`,
    user: { id, name, email }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the Express app for testing/external use
module.exports = app;