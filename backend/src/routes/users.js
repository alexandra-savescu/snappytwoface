const { uniqueNamesGenerator, colors, animals } = require('unique-names-generator');
const crypto = require('crypto');

const data = require('../data');

const config = {
    dictionaries: [colors, animals],
    separator: ' ',
    style: 'capital',
    length: 2
};

const users = (fastify, _, done) => {
    fastify.post('/', async (request, reply) => {
        let name = request.body.name;

        if (!name) {
            name = uniqueNamesGenerator(config);
        }

        const user = {
            id: crypto.randomUUID(),
            value: name
        };

        try {
            data.users.add(user);
            return user;
        } catch (err) {
            console.log(err);
            user.value = uniqueNamesGenerator(config);
            data.users.add(user);
            return user;
        }
    });

    fastify.get('/', async (request, reply) => {
        return data.users.get() ? data.users.get() : [];
    });

    done();
};

module.exports = users;