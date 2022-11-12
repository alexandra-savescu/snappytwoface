const fastify = require('fastify');

const messages = require('./routes/messages');
const users = require('./routes/users');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(messages, { prefix: '/api/messages' });
  app.register(users, { prefix: '/api/users' });

  return app;
};

module.exports = { build };