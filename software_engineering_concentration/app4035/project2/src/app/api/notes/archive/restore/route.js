import { NextResponse } from 'next/server';
import { readNotes, writeNotes } from '../../../../../../database/notesHelper';
import { getEATTimestamp } from '../../../../utils/time';

export async function POST(request) {
    try {
        const { id } = await request.json();
        const notes = await readNotes();
        const noteIndex = notes.findIndex(note => note.id === id && note.archived);
        if (noteIndex === -1) {
            return NextResponse.json({ error: 'Archived note not found' }, { status: 404 });
        }

        // Unarchive the note
        notes[noteIndex].archived = false;
        delete notes[noteIndex].archivedAt;
        notes[noteIndex].updatedAt = getEATTimestamp();

        await writeNotes(notes);
        return NextResponse.json({ message: 'Note unarchived successfully', note: notes[noteIndex] });
    } catch (error) {
        console.error("Error unarchiving note:", error);
        return NextResponse.json({ error: 'Error unarchiving note' }, { status: 500 });
    }
}
