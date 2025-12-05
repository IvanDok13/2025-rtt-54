const Note = require('../models/Note');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = '2h'; // Token will be valid for 2 hours
// openssl rand -hex 32

// Filter “Get All Notes”: Modify the GET / route. Instead of returning all notes in the database, it should now only return the notes where the user field matches the _id of the currently authenticated user (req.user._id).

async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({ user: req.user._id });
    if (!notes) {
      return res.status(404).json({ message: 'No notes found!' });
    }
    if (!req.user) {
      return res
        .status(401)
        .json({ message: 'You must be logged in to see this!' });
    }
    res.json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Secure “Update Note”: Modify the PUT /:id route. Before updating a note, you must first find the note by its ID. Then, check if the user field on that note matches the authenticated user’s _id.

// If they match, proceed with the update.
// If they do not match, return a 403 Forbidden status with an error message like "User is not authorized to update this note."

async function updateNote(req, res) {
  try {
    //find the note to update
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'No note found with this id!' });
    }
    if (note.user.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: 'User is not authorized to update this note.' });
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Secure “Delete Note”: Modify the DELETE /:id route. Similar to the update route, you must check for ownership before deleting a note.

// Find the note by its ID.
// If the user is the owner, delete the note.
// If the user is not the owner, return a 403 Forbidden status with an appropriate error message.

async function deleteNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'No note found with this id!' });
    }
    if (note.user.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: 'User is not authorized to delete this note.' });
    }
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    res.json(deletedNote);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { getAllNotes, updateNote, deleteNote };
