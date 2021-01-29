const productModel = require('./products.model');

const getAll = async (req, res) => {
    const products = await productModel.getAll();
    return res.status(200).json(products);
  };
  
  const getOne = async (req, res) => {
    const product = await productModel.getOne(req.params.id);
    if (product) {
      return res.status(200).json(product);
    }
    return res.status(404).end();
  };
  
  const create = (req, res) => {
    const newproduct = req.body;
    const productsUpdated = productModel.create(newproduct);
    return res.status(201).json(productsUpdated);
  };
  
  const update = (req, res) => {
    const updatedproduct = req.body;
    const productsUpdated = productModel.update(req.params.id, updatedproduct);
    return res.status(200).json(productsUpdated);
  };
  
  const remove = (req, res) => {
    const productsWithoutTheDeleted = productModel.remove(req.params.id);
    return res.status(200).json(productsWithoutTheDeleted);
  };
  
  module.exports = {
    create,
    update,
    getAll,
    getOne,
    remove,
  };