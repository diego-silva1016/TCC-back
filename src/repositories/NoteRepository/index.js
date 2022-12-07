
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

  getNote(id) {
    return this.notes.find(c => c.nfeId === id);
  }

  cancelNote(id) {
    const note = this.notes.find(c => c.nfeId === id);

    note.status = "Cancelada";
  }

}

module.exports = NoteRepository;