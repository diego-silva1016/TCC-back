
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
    return this.note.find(c => c.codigo === codigo);
  }

  cancelNote(codigo) {
    const note = this.note.find(c => c.codigo === codigo);

    note.status = "Cancelado";

  }

}

module.exports = NoteRepository;