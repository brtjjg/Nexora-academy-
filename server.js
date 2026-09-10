const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '.')));

// Health check endpoint (Render uses this to verify the service is up)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'nexora-academy',
    timestamp: new Date().toISOString()
  });
});

// Optional: tiny API stub for future backend features
app.get('/api/status', (req, res) => {
  res.json({
    name: 'Nexora Academy API',
    version: '1.0.0',
    message: 'Backend is running. Frontend uses localStorage for now.'
  });
});

// Catch-all: serve index.html for any unknown route (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎓 Nexora Academy server running on port ${PORT}`);
});
