const express = require('express');
const router = express.Router();
const { createNote, getNoteById, queryNotes, updateNote } = require('../controllers/noteController');

router.post('/notes', createNote);
router.get('/notes/:id', getNoteById);
router.get('/notes', queryNotes);
router.put('/notes/:id', updateNote);

module.exports = router;
