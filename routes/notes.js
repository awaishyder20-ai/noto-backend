const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} = require('../controllers/noteController');

// GET all notes with filters
router.get('/', getAllNotes);

// GET notes by search
router.get('/search', searchNotes);

// GET single note by ID
router.get('/:id', getNoteById);

// CREATE a new note
router.post('/', createNote);

// UPDATE a note
router.put('/:id', updateNote);

// DELETE a note
router.delete('/:id', deleteNote);

module.exports = router;
