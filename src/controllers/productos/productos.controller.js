
const { uuid } = require('uuidv4');

const products = [{
    "id": "f1b32062-b0ff-4f89-bf58-42c7445e9cae",
    "nombre": "papel",
    "precio": "3.0"
}];

exports.getProducts = async (ctx, next) => {
    return ctx.ok(products);
};

exports.getProduct = async (ctx, next) => {
    const id = ctx.params.id;
    const product = products.find( x => x.id === id );

    if(!product) {
        return ctx.notFound('No se encontro el producto');
    };


    return ctx.ok(product);
};

exports.addProduct = async (ctx, next) => {
    const body =  ctx.request.body;
    // console.log(body); 
    
    const id = uuid();

    products.push({ id, ...body });

    ctx.request.params.id = id;

    return next(); 
};

exports.editProduct = async (ctx, next) => {
    const id = ctx.params.id;
    const body = ctx.request.body;

    let product = products.find( x => x.id === id );

    if(!product) {
        return ctx.notFound('No se encontro el producto');
    };
    
    const index = products.indexOf( product );

    product = { ...product, ...body };

    products[index] = product;

    return next(); 
};

exports.deleteProduct = async (ctx, next) => {
    const id = ctx.params.id;
    const body = ctx.request.body;

    let product = products.find( x => x.id === id );

    if(!product) {
        return ctx.notFound('No se encontro el producto');
    };

    const index = products.indexOf( product );

    products.splice( index, 1);

    return ctx.ok('Se elimino correctamente!'); 
};

