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

noteRouter.get('/:codigo', (request, response) => {
  const { codigo } = request.params;
  return response.json(noteService.getNote(codigo));
});

noteRouter.put('/', (request, response) => {
  const { codigo } = request.body;
  return response.json(noteService.cancelNote(codigo));
});

module.exports = noteRouter;