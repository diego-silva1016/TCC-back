const express = require('express');
const CompanyServer = require('../services/CompanyServer');

const companyRouter = express.Router();

const companyService = new CompanyServer()

companyRouter.post(
  '/',
  (request, response) => {
    const {company } = request.body;

    return response.json(companyService.create(company));
  }
);

companyRouter.get('/', (request, response) => {
    return response.json(companyService.getCompany());
  });

companyRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  return response.json(companyService.getCompany(id));
});

companyRouter.put('/', (request, response) => {
  const { company } = request.body;
  return response.json(companyService.updateCompany(company));
});

companyRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  companyService.deleteCompany(id)
  return response.sendStatus(200);
});

module.exports = companyRouter;