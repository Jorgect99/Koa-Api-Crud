
const { uuid } = require('uuidv4');
const { Products } = require('../../database/connection');

const products = [{
    "id": "f1b32062-b0ff-4f89-bf58-42c7445e9cae",
    "nombre": "papel",
    "precio": "3.0"
}];

exports.getProducts = async (ctx, next) => {
    const productoss = await Products.findAll();
    // console.log(productoss);
    return ctx.ok(productoss);
};

exports.getProduct = async (ctx, next) => {
    const id = ctx.params.id;
    const product = await Products.findAll({
        where: {
            id: id
        }
    });

    if(!product) {  
        return ctx.notFound('No se encontro el producto');
    };

    return ctx.ok(product);
};

exports.addProduct = async (ctx, next) => {
    const body =  ctx.request.body;

    const product = await Products.create(body)

    return ctx.ok(product);
};

exports.editProduct = async (ctx, next) => {
    const id = ctx.params.id;
    const body = ctx.request.body;

    let product = await Products.update(body, {
        where: { id: id }
    });

    if(!product) {
        return ctx.notFound('No se encontro el producto');
    };

    return ctx.ok('Se ha modificado correctamente!');
};

exports.deleteProduct = async (ctx, next) => {
    const id = ctx.params.id;

    let product = await Products.destroy({
        where: { id: id }
    });

    if(!product) {
        return ctx.notFound('No se encontro el producto');
    };

    return ctx.ok('Se ha eliminado correctamente!'); 
};

