const crypto = require('crypto');

const data = require('../data');

const messages = (fastify, _, done) => {

    fastify.post('/:userId', async (request, reply) => {
        const { userId } = request.params;

        const message = {
            id: crypto.randomUUID(),
            userId: userId,
            timestamp: new Date(),
            value: request.body.message
        };

        try {
            data.messages.add(message);
            return message;
        } catch (err) {
            console.log(err);
            reply.status(500).send({ error: err.message });
        }
    });

    fastify.get('/', async (request, reply) => {
        return data.messages.get() ? data.messages.get() : [];
    });

    fastify.delete('/', async (request, reply) => {
        data.messages.clear();
    });

    done();
};

module.exports = messages;