import { NextResponse } from 'next/server';
import { readNotes, writeNotes } from '../../../../../database/notesHelper';

export async function GET() {
    const notes = await readNotes();
    // Filter only the notes that have isDeleted set to true
    const deletedNotes = notes.filter(note => note.isDeleted);
    return NextResponse.json({ deletedNotes });
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        let notes = await readNotes();
        // Find the note in the bin
        const noteIndex = notes.findIndex(note => note.id === id && note.isDeleted);
        if (noteIndex === -1) {
            return NextResponse.json({ error: 'Note not found in bin' }, { status: 404 });
        }
        // Permanently remove the note
        notes.splice(noteIndex, 1);
        await writeNotes(notes);
        return NextResponse.json({ message: 'Note permanently deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting note permanently' }, { status: 500 });
    }
}
