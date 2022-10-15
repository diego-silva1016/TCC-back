const { uuid } = require("uuidv4");

class ClientRepository {
 constructor(){
    this.clientes = []
  }

  findDocument(document) {
    const findClient = this.clientes.find(c => c.documento === document);

    return findClient;
  }

  create(clientData) {
    clientData.id = uuid()

    this.clientes.push(clientData);

    return clientData;
  }

  getAllClients() {
    return this.clientes;
  }
}

module.exports = ClientRepository;
