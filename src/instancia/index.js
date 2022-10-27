const ClientRepository = require("../repositories/ClientRepository");
const ServiceRepository = require("../repositories/ServiceRepository");

const clientRepository = new ClientRepository();
const serviceRepository = new ServiceRepository();

exports.clientRepository = clientRepository
exports.serviceRepository = serviceRepository