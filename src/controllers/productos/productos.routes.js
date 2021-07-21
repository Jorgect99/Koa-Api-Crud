const controller = require('./productos.controller');

module.exports = Router => {
    const router = new Router({
        prefix : '/products'
    });

    router.get('/', controller.getProducts); 
    router.get('/:id', controller.getProduct); 
    router.post('/', controller.addProduct, controller.getProduct); 
    router.put('/:id', controller.editProduct, controller.getProduct);  
    router.delete('/:id', controller.deleteProduct);

    return router;
};