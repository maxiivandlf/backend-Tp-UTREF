const express = require('express');
const { productsRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');

const { productsModel } = require('./models');

const PORT = 3003;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server corriendo en el puerto ${PORT}`);
});
