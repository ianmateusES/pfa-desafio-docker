const express = require('express');
const crypto = require('crypto');
const knex = require('./database');

const app = express();
const port = 3333;

app.use(express.json());

app.get('/test', async (req, res) => {
  return res.json({ message: 'Okay' });
});

app.get('/', async (req, res) => {
  const modulos = await knex('modulos').select('*');
  return res.json(modulos);
});

app.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ error: 'Not name' });
  }
  const id = crypto.randomBytes(4).toString('HEX');

  await knex('modulos').insert({ id, name });
  
  return res.json({ id, name });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
