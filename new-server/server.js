import { createServer } from 'node:http';

const server = createServer((request, response) => {
    response.write('Server is running on Port 3333');

    return response.end();
});




server.listen(3333);