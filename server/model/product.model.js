const { default: mongoose } = require('mongoose')
const mongodb = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title is needed']
    },
    price: {
      type: Number,
      required: [true, 'Product price is needed']
    },
    description: {
      type: String,
      required: [true, 'Product description is needed']
    }
  },
  {
    timestamps: true
  }
)

// creating a model
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
