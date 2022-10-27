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
    const noteExist = this.noteRepository.findDocument(note.documento);

    if (noteExist) throw new Error('Nota já emitida.');

    return this.noteRepository.create(note);
  }

  getNotes() {
    return this.noteRepository.getAllNotes();
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
