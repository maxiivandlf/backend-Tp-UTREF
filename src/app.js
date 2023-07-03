const express = require('express');
const { productsRouter } = require('./routes');

const PORT = 3003;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
