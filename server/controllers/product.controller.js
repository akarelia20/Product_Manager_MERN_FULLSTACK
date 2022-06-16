const Product = require('../model/product.model')

const getAllProduct = (req, res) => {
  Product.find({})
    .then(products => {
      res.json(products)
    })
    .catch(err =>
      res.json({ message: 'Something went wrong while gettingAll', error: err })
    )
}

const createProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => {
      res.json(newProduct)
    })
    .catch(err =>
      res.json({ message: 'Something went wrong while creating', error: err })
    )
}

const getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(getOne => {
      res.json(getOne)
    })
    .catch(err => {
      res.json({ message: 'Something went wrong in getOne', error: err })
    })
}

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json({ message: 'Something went wrong while deleting', error: err })
    })
}

const updateProduct = (req, res) => {
  Product.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  })
    .then(product => {
      res.json(product)
    })
    .catch(err => {
      res.json({ message: 'Something went wrong while updating', error: err })
    })
}

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct
}
