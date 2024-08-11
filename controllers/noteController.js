const Note = require('../models/noteModel');

// Create Note
exports.createNote = async (req, res) => {
    try {
        const { title, body } = req.body;
        const note = new Note({
            title,
            body
        });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fetch Note by ID
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Query Notes by Title Substring
exports.queryNotes = async (req, res) => {
    try {
        const notes = await Note.find({ title: new RegExp(req.query.title, 'i') });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Note
exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
