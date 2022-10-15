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

  getClients() {
    return this.clientRepository.getAllClients()
  }
}

module.exports = ClientService;
