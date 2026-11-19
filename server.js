const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  });
  next();
});

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'], maxAge: 0 }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`Portfolio running on port ${PORT}`));
