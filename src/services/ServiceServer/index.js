const {serviceRepository} = require("../../instancia");

class ServiceServer {
   create(service) {
    const serviceExist = serviceRepository.findCodigo(service.codigo);

    if (serviceExist) throw new Error('Serviço já cadastrado.');

    return serviceRepository.create(service);
  }

  updateService(service) {
    return serviceRepository.updateService(service)
  }

  getServices() {
    return serviceRepository.getAllServices()
  }

  getService(id) {
    return serviceRepository.getService(id)
  }

  deleteService(id) {
    return serviceRepository.deleteService(id)
  }
}

module.exports = ServiceServer;
