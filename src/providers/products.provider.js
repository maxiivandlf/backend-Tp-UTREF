const { productsModel } = require('../models');

const createProduct = async (product) => {
  try {
    const newProduct = await productsModel.create(product);
    return newProduct;
  } catch (error) {
    console.log('Error creating product', error);
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const allProducts = await productsModel.findAll();
    return allProducts;
  } catch (error) {
    console.log('Error getting products', error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const product = await productsModel.findByPk(id);
    return product;
  } catch (error) {
    console.log('Error getting product', error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {
    const updatedProduct = await productsModel.update(
      {
        imagen: product.imagen,
        nombre: product.nombre,
        importe: product.importe,
        stock: product.stock,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return updatedProduct[0];
  } catch (error) {
    console.log('Error updating product', error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await productsModel.destroy({
      where: {
        id: id,
      },
    });
    return deletedProduct;
  } catch (error) {
    console.log('Error deleting product', error);
    throw error;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
