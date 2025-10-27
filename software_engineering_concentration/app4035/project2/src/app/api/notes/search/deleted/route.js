import { NextResponse } from 'next/server';
import { readNotes } from '../../../../../../database/notesHelper';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.toLowerCase() || '';

    // Get all notes and filter for soft-deleted (bin) notes
    const notes = await readNotes();
    const deletedNotes = notes.filter(note => note.isDeleted);

    // Search within soft-deleted notes
    const results = deletedNotes.filter(note => {
        const inTitle = note.title && note.title.toLowerCase().includes(query);
        const inContent = note.content && note.content.toLowerCase().includes(query);
        const inTags =
            note.tags && Array.isArray(note.tags)
                ? note.tags.some(tag => tag.toLowerCase().includes(query))
                : false;
        return inTitle || inContent || inTags;
    });

    return NextResponse.json({ results });
}
