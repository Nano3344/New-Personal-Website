const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  res.json({ message: 'Message received'})
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server started');
});
