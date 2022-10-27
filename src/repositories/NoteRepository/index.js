
class NoteRepository {
 constructor(){
    this.notes = []
  }

  create(noteData) {
    noteData.codigo = Math.random() * (999999999 - 100000000) + 100000000;
    noteData.status = "Emitido";

    this.notes.push(noteData);

    return noteData;
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