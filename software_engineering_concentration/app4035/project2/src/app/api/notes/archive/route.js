import { NextResponse } from 'next/server';
import { readNotes, writeNotes } from '../../../../../database/notesHelper';
import { getEATTimestamp } from '../../../utils/time';

export async function POST(request) {
    try {
        const { id } = await request.json();
        const notes = await readNotes();
        const noteIndex = notes.findIndex(note => note.id === id);
        if (noteIndex === -1) {
            return NextResponse.json({ error: 'Note not found' }, { status: 404 });
        }

        // Check if the note is soft-deleted
        if (notes[noteIndex].isDeleted) {
            return NextResponse.json({ error: 'Cannot archive a soft-deleted note. Please restore it first.' }, { status: 400 });
        }

        // Update the note to be archived
        notes[noteIndex].archived = true;
        notes[noteIndex].archivedAt = getEATTimestamp();
        notes[noteIndex].updatedAt = getEATTimestamp(); // Update the updatedAt

        await writeNotes(notes);
        return NextResponse.json({ message: 'Note archived successfully', note: notes[noteIndex] });
    } catch (error) {
        console.error("Error archiving note:", error);
        return NextResponse.json({ error: 'Error archiving note' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const notes = await readNotes();
        // Filter notes where archived is true
        const archivedNotes = notes.filter(note => note.archived);
        return NextResponse.json({ archivedNotes });
    } catch (error) {
        return NextResponse.json({ error: 'Error retrieving archived notes' }, { status: 500 });
    }
}
