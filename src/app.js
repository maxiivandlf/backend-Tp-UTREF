const express = require('express');
const { productsRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');
const dotenv = require('dotenv');

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.listen(SERVER_PORT, async () => {
  await initializeDB();
  console.log(`Server corriendo en el puerto ${SERVER_PORT}`);
});
