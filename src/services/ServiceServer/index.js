const ServiceRepository = require("../../repositories/ServiceRepository");

class ServiceServer {
   constructor(){
    this.serviceRepository = new ServiceRepository()
  }

   create(service) {
    const serviceExist = this.serviceRepository.findCodigo(service.codigo);

    if (serviceExist) throw new Error('Serviço já cadastrado.');

    return this.serviceRepository.create(service);
  }

  updateService(service) {
    return this.serviceRepository.updateService(service)
  }

  getServices() {
    return this.serviceRepository.getAllServices()
  }

  getService(id) {
    return this.serviceRepository.getService(id)
  }

  deleteService(id) {
    return this.serviceRepository.deleteService(id)
  }
}

module.exports = ServiceServer;
