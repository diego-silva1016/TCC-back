const express = require('express');
const ClientService = require('../services/ClientServer');

const clientRouter = express.Router();

const clientService = new ClientService()

clientRouter.post(
  '/',
  (request, response) => {
    const client = request.body;

    return response.json(clientService.create(client));
  }
);

clientRouter.get('/', (request, response) => {
    return response.json(clientService.getClients());
  });

module.exports = clientRouter;