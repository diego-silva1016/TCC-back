const {clientRepository} = require("../../instancia");

class ClientService {
   create(client) {
    const clientExist = clientRepository.findDocument(client.documento);

    if (clientExist) throw new Error('Cliente já cadastrado.');

    return clientRepository.create(client);
  }

  updateClient(client) {
    return clientRepository.updateClient(client)
  }

  getClients() {
    return clientRepository.getAllClients()
  }

  getClient(id) {
    return clientRepository.getClient(id)
  }

  deleteClient(id) {
    return clientRepository.deleteClient(id)
  }
}

module.exports = ClientService;
