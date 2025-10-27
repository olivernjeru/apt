import { NextResponse } from 'next/server';
import { readNotes } from '../../../../../database/notesHelper';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let notes = await readNotes();

    if (category) {
      notes = notes.filter(note => note.categories?.includes(category)); //Check if category exists in the array
    }

    return NextResponse.json({ notes });
  } catch (error) {
    console.error("Error fetching notes:", error); // Debugging log
    return NextResponse.json({ error: "Error fetching notes" }, { status: 500 });
  }
}
