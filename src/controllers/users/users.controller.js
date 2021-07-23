
const { Users } = require('../../database/connection');
const bcrypt = require('bcryptjs');


exports.registerUser = async (ctx, next) => {

    ctx.request.body.password = await bcrypt.hash(ctx.request.body.password, 10);
    const user = await Users.create(ctx.request.body);

    return ctx.ok(user);
};