const express = require('express');
const NoteService = require('../services/NoteServer');

const noteRouter = express.Router();

const noteService = new NoteService()

noteRouter.post(
  '/',
  (request, response) => {
    const { invoice } = request.body;

    return response.json(noteService.create(invoice));
  }
);

noteRouter.get('/', (request, response) => {
  return response.json(noteService.getNotes());
});

noteRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  return response.json(noteService.getNote(id));
});

noteRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  return response.json(noteService.cancelNote(id));
});

module.exports = noteRouter;