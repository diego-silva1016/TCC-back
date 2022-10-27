
class NoteRepository {
 constructor(){
    this.notes = []
  }

  create(noteData) {  
    this.notes.push(noteData);

    return noteData;
  }

  getNotes() {
    return this.notes;
  }

  getNote(codigo) {
    return this.notes.find(c => c.codigoNota === Number(codigo));
  }

  cancelNote(codigo) {
    const note = this.notes.find(c => c.codigoNota === Number(codigo));

    note.status = "Cancelado";

  }

}

module.exports = NoteRepository;