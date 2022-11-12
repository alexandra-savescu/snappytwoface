# Welcome to Snappy, a.k.a. Project Gotham

Snappy is a simple, yet tricky chat app. It allows its users to exchange messages, thoughts and ideas, but every 30 seconds it clears everything.

The project is composed of 2 pieces (soon to be 3):
- backend
- scheduler

The project has some simple business rules:
- Choosing a name is optional
- If you choose a name, it must be unique, or else you get assigned a random one
- You cannot post an anonymous message (you must be part of the chat)
- There is no limitation on the numer of users / messages that can be added

## The Backend
A small web API created with Fastify. The HTTP requests that can be made are documented in the Postman collection found in the repo root.
It allows some simple requests:

*Users*
- add a user
- read all users

*Messages* 
- add a message
- read all messages
- delete all messages 

Run it with `node backend/src/server`. This will start a local webserver on `http://localhost:3000`

## The Scheduler
As basic as it comes, it's a task that runs every 30 seconds and calls the Backend API to delete all the messages.

Run it with `node scheduler/runner`. This will do a DELETE request to an API endpoint every 30 seconds.
The hostname used for the API can be configured in `scheduler/config.json` (defaults to `http://localhost:3000/`).

## The Frontend
Coming soon, until lunchtime. Stay tuned :) 