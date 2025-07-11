const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Enabling  CORS for all origins
server.use(cors());
server.use(middlewares);
server.use(router);

// port value
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`JSON Server running on port ${PORT}`);
});
