const ClientRepository = require("../../repositories/ClientRepository");

class ClientService {
   constructor(){
    this.clientRepository = new ClientRepository()
  }

   create(client) {
    const clientExist = this.clientRepository.findDocument(client.documento);

    if (clientExist) throw new Error('Cliente já cadastrado.');

    return this.clientRepository.create(client);
  }

  updateClient(client) {
    return this.clientRepository.updateClient(client)
  }

  getClients() {
    return this.clientRepository.getAllClients()
  }

  getClient(id) {
    return this.clientRepository.getClient(id)
  }

  deleteClient(id) {
    return this.clientRepository.deleteClient(id)
  }
}

module.exports = ClientService;
