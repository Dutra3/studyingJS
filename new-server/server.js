import { fastify } from 'fastify';
import { DatabaseMemory } from './database.memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.get('/videos', () => {
    return 'Hello World';
})

server.post('/videos', (request, reply) => {
    database.create({
        title: 'Video 01',
        description: 'Description Video 01',
        duration: 180,
    })

    return reply.status(201).send();
})

server.put('/videos/:id', () => {
    return 'Hello World';
})

server.delete('/videos/:id', () => {
    return 'Hello World';
})

server.listen({
    port: 3333,
})