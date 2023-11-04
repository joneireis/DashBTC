const fetch = require('node-fetch');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos da pasta 'public'

app.get('/', (req, res) => {
  res.sendFile('public/digits.html', { root: '.' });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
