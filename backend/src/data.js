const data = () => {
    let messages = [];
    let users = [];

    const addMessage = (message) => {
        if (users.some((element) => element.id === message.userId)) {
            messages.push(message);
        } else {
            throw new Error('User does not exist');
        }
    };

    const addUser = (user) => {
        if (users.some((element) => element.value === user.value)) {
            throw new Error('User already exists');
        } else {
            users.push(user);
        }
    };

    return {
        messages: {
            add: addMessage,
            get: () => messages,
            clear: () => messages = []
        },
        users: {
            add: addUser,
            get: () => users
        }
    }
};

module.exports = data();