const Koa = require('koa');
const Respond = require('koa-respond');
const BodyParser = require('koa-bodyparser');

const app = new Koa();

const applyApiMiddleware = require('./src/controllers');
require('./src/database/connection');


app.use(BodyParser());
app.use(Respond());

applyApiMiddleware(app);

app.listen(3000, () => {
    console.log('Koa Crud en el 3000')

});