const { uuid } = require("uuidv4");
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
    note.nfeId = uuid()
    note.codigoNota = '15789456324785021478965238965478965423014587';
    note.status = "Emitido";
    const client = this.clientServer.getClient(note.clientId)

    note.clientName = client.nome;

    return this.noteRepository.create(note);
  }

  getNotes() {
    return this.noteRepository.getNotes();
  }

  getNote(id) {
    const findedNote = this.noteRepository.getNote(id)
    const nota = {
      ...findedNote,
      ...this.clientServer.getClient(findedNote.clientId),
      ...this.serviceServer.getService(findedNote.serviceId)
    };

    return nota;
    
  }

  cancelNote(id) {
    return this.noteRepository.cancelNote(id);
  }
}

module.exports = NoteService;
