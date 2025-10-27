import { NextResponse } from 'next/server';
import { readNotes } from '../../../../../../database/notesHelper';

export async function GET(request) {
    // Extract the "query" parameter from the request URL
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.toLowerCase() || '';

    // Get all notes and filter for active notes (not archived and not soft-deleted)
    const notes = await readNotes();
    const activeNotes = notes.filter(note => !note.archived && !note.isDeleted);

    // Perform a case-insensitive search on title, content, and tags
    const results = activeNotes.filter(note => {
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
