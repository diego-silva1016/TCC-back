const ClientRepository = require("../repositories/ClientRepository");
const ServiceRepository = require("../repositories/ServiceRepository");
const CompanyRepository = require("../repositories/CompanyRepository");

const clientRepository = new ClientRepository();
const serviceRepository = new ServiceRepository();
const companyRepository = new CompanyRepository();

exports.companyRepository = companyRepository
exports.clientRepository = clientRepository
exports.serviceRepository = serviceRepository