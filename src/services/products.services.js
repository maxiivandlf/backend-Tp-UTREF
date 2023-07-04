const { productProvider } = require('../providers');

const createProduct = async (product) => {
  const newProduct = await productProvider.createProduct(product);
  return newProduct;
};

const getAllProducts = async () => {
  const allProducts = await productProvider.getAllProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const product = await productProvider.getProductById(id);
  return product;
};
const updateProduct = async (id, product) => {
  const updatedProduct = await productProvider.updateProduct(id, product);
  return updatedProduct;
};
const deleteProduct = async (id) => {
  const deletedProduct = await productProvider.deleteProduct(id);
  return deletedProduct;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
