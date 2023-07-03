const getAllProducts = async (req, res) => {
  try {
    res.status(200).send('ESTOS SON TODO LOS PRODUCTOS ');
  } catch (error) {
    res.status(404).json({
      event: 'Get all products',
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    res.status(201).json({
      event: 'Creando producto',
      product: req.body,
    });
  } catch (error) {
    res.status(500).json({
      event: 'crear producto',
      error: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
