const express = require('express');
const app = express();
const port = 3000;

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from MVVM API!' });
});

app.listen(port, () => {
  console.log(`MVVM backend listening at http://localhost:${port}`);
});
