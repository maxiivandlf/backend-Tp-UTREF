const { productService } = require('../services');

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      action: 'getAllProducts',
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      action: 'createProduct',
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      action: 'getProductById',
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    if (product === 1) {
      res.status(200).json({
        message: 'Product updated successfully',
      });
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      action: 'updateProduct',
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if (product === 1) {
      res.status(200).json({
        message: 'Product deleted successfully',
      });
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      action: 'deleteProduct',
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
