const { uuid } = require("uuidv4");

class ServiceRepository {
 constructor(){
    this.services = []
  }

  findCodigo(codigo) {
    const findService = this.services.find(c => c.codigo === codigo);

    return findService;
  }

  create(serviceData) {
    serviceData.id = uuid()

    this.services.push(serviceData);

    return serviceData;
  }

  updateService(service) {
    const index = this.services.findIndex(c => c.id === service.id);

    this.services[index] = service;

    return service
  }

  getAllServices() {
    return this.services;
  }

  getService(id) {
    return this.services.find(c => c.id === id);
  }

  deleteService(id) {
    this.services = this.services.filter(c => c.id !== id);
  }
}

module.exports = ServiceRepository;
