const fs = require('fs');
const path = require('path');
const Router = require('@koa/router');

const OnErrorMiddleware = require('../middlewares/OnError.middleware');

const baseName = path.basename(__filename);

function applyApiMiddleware(app) {

	const router = new Router();

    router.use(OnErrorMiddleware);

	router.get('/', ctx => {
        ctx.body = 'Koa Crud App';
    });

    // Require all the folders and create a sub-router for each feature api
	fs.readdirSync(__dirname)
        .filter(file => file.indexOf('.') !== 0 && file !== baseName)
        .forEach(file => {
            const api = require(path.join(__dirname, file))(Router);
            router.use(api.allowedMethods()).use(api.routes());
        });


	app.use(router.routes()).use(router.allowedMethods());
};

module.exports = applyApiMiddleware;