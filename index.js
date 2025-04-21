const express = require('express');
const app = express();

app.get('/api/v1/test/:count', (req, res) => {
  const checkCount = req.params.count;

  // Check integer not text
  const n = Number(checkCount);
  if (!Number.isInteger(n)) {
    return res.status(400).json({ error: 'Please provide an integer between 1 and 100.' });
  }

  // Check number between 1-100
  if (n < 1 || n > 100) {
    return res.status(400).json({ error: 'Number count must be between 1 and 100.' });
  }

  // calculate Fibonacci sequence
  const seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(i < 2 ? i : seq[i - 1] + seq[i - 2]);
  }

  const total = seq.reduce((a, b) => a + b, 0);

  res.json({ 'member-count': n, sequence: seq, total });
});

  
app.listen(3000, () => console.log('Server running on PORT 3000'));
