const ProductCrl = require('../controllers/product.controller')

module.exports = app => {
  app.get('/api/product', ProductCrl.getAllProduct)
  app.post('/api/product', ProductCrl.createProduct)
  app.get('/api/product/:id', ProductCrl.getProductById)
  app.put('/api/product/:id', ProductCrl.updateProduct)
  app.delete('/api/product/:id', ProductCrl.deleteProduct)
}
