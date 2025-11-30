const Product = require('../models/Product');

/**
 * GET /
 * get all or filterd products
 */

const getAllProducts = async (req, res) => {
  // destructure the query
  const {
    category,
    minPrice,
    maxPrice,
    sortBy = 'price_asc',
    page = 1,
    limit = 10,
  } = req.query;

  /**
   * Filter Logic
   */
  const filterObj = {};
  //category
  category ? (filterObj['category'] = { $in: [...category.split(',')] }) : '';
  //minPrice
  minPrice ? (filterObj['price'] = { $gte: minPrice }) : '';
  //maxPrice
  maxPrice ? (filterObj['price'] = { $lte: maxPrice }) : '';
  // console.log(filterObj);
  /**
   * Sorting Login
   */
  const sortObj = {};
  const [obj, order] = sortBy.split('_');
  sortObj[obj] = order === 'asc' ? 1 : -1;
  // console.log(sortObj, obj, order);

  try {
    const products = await Product.find(filterObj)
      .sort(sortObj)
      .skip((page - 1) * limit)
      .limit(limit)
      .select({
        name: 1,
        price: 1,
        category: 1,
        _id: 0,
      });
    if (!products) {
      res.status(400).json({ message: 'Invalid URL' });
    }
    console.log(`Showing page ${page} of results:`, products);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching product from server' });
  }
};

/**
 * POST /
 * create a new product
 */
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!product) {
      res.status(400).json({ message: 'Failed to create a new product' });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET /:id
 * get a product by id
 */
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Invalid ID' });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * PUT /:id
 * update a product
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ message: 'Invalid ID' });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE /:id
 * update a product
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Invalid ID' });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
