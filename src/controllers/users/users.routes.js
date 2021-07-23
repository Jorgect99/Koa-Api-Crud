const controller = require('./users.controller');

module.exports = Router => {
    const router = new Router({
        prefix : '/users'
    });

    router.post('/register', controller.registerUser); 

    return router;
};