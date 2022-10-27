const express = require('express');
const ClientService = require('../services/ClientServer');

const clientRouter = express.Router();

const clientService = new ClientService()

clientRouter.post(
  '/',
  (request, response) => {
    const {cliente } = request.body;

    return response.json(clientService.create(cliente));
  }
);

clientRouter.get('/', (request, response) => {
    return response.json(clientService.getClients());
  });

clientRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  return response.json(clientService.getClient(id));
});

clientRouter.put('/', (request, response) => {
  const { cliente } = request.body;
  return response.json(clientService.updateClient(cliente));
});

clientRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  clientService.deleteClient(id)
  return response.sendStatus(200);
});

module.exports = clientRouter;