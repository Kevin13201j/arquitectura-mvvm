const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from MVVM Backend (Model)' });
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});