const express = require('express');
const ServiceServer = require('../services/ServiceServer');

const serviceRouter = express.Router();

const serviceServer = new ServiceServer()

serviceRouter.post(
  '/',
  (request, response) => {
    const { service } = request.body;

    return response.json(serviceServer.create(service));
  }
);

serviceRouter.get('/', (request, response) => {
    return response.json(serviceServer.getServices());
  });

serviceRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  return response.json(serviceServer.getService(id));
});

serviceRouter.put('/', (request, response) => {
  const { service } = request.body;
  return response.json(serviceServer.updateService(service));
});

serviceRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  serviceServer.deleteService(id)
  return response.sendStatus(200);
});

module.exports = serviceRouter;