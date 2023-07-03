const getAllProducts = (req, res) => {
  try {
    res.status(200).send('ESTOS SON TODO LOS PRODUCTOS ');
  } catch (error) {
    res.status(404).json({
      event: 'Get all products',
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
};
