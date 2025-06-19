const express = require('express');
const path = require('path');
const app = express();
const port = 8082;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`✅ Frontend MVVM running at http://localhost:${port}`);
});