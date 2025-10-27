import { NextResponse } from 'next/server';
import { readNotes, writeNotes } from '../../../../../../database/notesHelper';
import { getEATTimestamp } from '../../../../utils/time'

export async function POST(request) {
    try {
        const { id } = await request.json();
        const notes = await readNotes();
        const noteIndex = notes.findIndex(note => note.id === id && note.isDeleted);

        if (noteIndex === -1) {
            return NextResponse.json({ error: 'Note not found in bin' }, { status: 404 });
        }

        // Restore the note
        notes[noteIndex].isDeleted = false;
        // Optionally update the updatedAt to the current EAT time
        notes[noteIndex].updatedAt = getEATTimestamp();
        delete notes[noteIndex].deletedAt;

        await writeNotes(notes);
        return NextResponse.json({ message: 'Note restored successfully', note: notes[noteIndex] });
    } catch (error) {
        return NextResponse.json({ error: 'Error restoring note' }, { status: 500 });
    }
}
