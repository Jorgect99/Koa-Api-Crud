const controller = require('./productos.controller');

module.exports = Router => {
    const router = new Router({
        prefix : '/products'
    });

    router.get('/', controller.getProducts); 
    router.get('/:id', controller.getProduct); 
    router.post('/', controller.addProduct); 
    router.put('/:id', controller.editProduct);  
    router.delete('/:id', controller.deleteProduct);

    return router;
};