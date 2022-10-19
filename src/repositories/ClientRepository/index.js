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

  updateClient(client) {
    const index = this.clientes.findIndex(c => c.id === client.id);

    this.clientes[index] = client;

    return client
  }

  getAllClients() {
    return this.clientes;
  }

  getClient(id) {
    return this.clientes.find(c => c.id === id);
  }

  deleteClient(id) {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}

module.exports = ClientRepository;
