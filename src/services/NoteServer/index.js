const NoteRepository = require("../../repositories/NoteRepository");
const ClientServer = require("../ClientServer")
const ServiceServer = require("../ServiceServer")

class NoteService {
   constructor(){
    this.noteRepository = new NoteRepository();
    this.clientServer = new ClientServer();
    this.serviceServer = new ServiceServer();
  }

   create(note) {
    note.codigoNota = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
    note.status = "Emitido";
    const client = this.clientServer.getClient(note.clientId)

    note.clientName = client.nome;

    return this.noteRepository.create(note);
  }

  getNotes() {
    return this.noteRepository.getNotes();
  }

  getNote(codigo) {
    const findedNote = this.noteRepository.getNote(codigo)
    const nota = {
      ...findedNote,
      ...this.clientServer.getClient(findedNote.clientId),
      ...this.serviceServer.getService(findedNote.serviceId)
    };

    return nota;
    
  }

  cancelNote(codigo) {
    return this.noteRepository.cancelNote(codigo);
  }
}

module.exports = NoteService;
