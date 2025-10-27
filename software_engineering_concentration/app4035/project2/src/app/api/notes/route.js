import { NextResponse } from 'next/server';
import { readNotes, writeNotes } from '../../../../database/notesHelper';
import { v4 as uuidv4 } from 'uuid';
import { getEATTimestamp } from '@/app/utils/time';
import { readCategories, writeCategories } from '../../../../database/categoriesHelper';
import { getBase64FileSize } from '@/app/utils/file';

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export async function GET() {
    const notes = await readNotes();
    // Filter to return only active notes (not archived and not soft deleted (sent to bin))
    const activeNotes = notes.filter(note => !note.archived && !note.isDeleted);
    return NextResponse.json({
        notes: activeNotes.map(note => ({
            ...note,
            categories: note.categories || [] // Ensure categories is always an array
        }))
    });
}

export async function POST(request) {
    try {
        const newNote = await request.json();

        // Optional fields: backgroundColor (hex code) and image (Base64 string)
        // Check if an image is provided and if so, verify its size
        if (newNote.image) {
            const imageSize = getBase64FileSize(newNote.image);
            if (imageSize > MAX_IMAGE_SIZE) {
                return NextResponse.json(
                    { error: 'Image size exceeds the 5MB limit.' },
                    { status: 400 }
                );
            }
        }

        // Add unique id and timestamps
        newNote.id = uuidv4();
        const timestamp = getEATTimestamp();
        newNote.createdAt = timestamp;
        newNote.updatedAt = timestamp;
        newNote.archived = false; // Default value for archiving
        newNote.isDeleted = false;

        // Ensure categories is an array (default to ["Uncategorized"] if none is provided)
        newNote.categories = Array.isArray(newNote.categories) && newNote.categories.length > 0
            ? newNote.categories
            : ["Uncategorized"];

        // Fetch existing categories
        let categories = await readCategories();

        // Ensure all categories exist, if not, add them
        newNote.categories.forEach(cat => {
            if (!categories.includes(cat)) {
                categories.push(cat);
            }
        });

        await writeCategories(categories); // Save updated category list

        // Create a snapshot of newNote without versions to avoid circular reference
        const noteSnapshot = { ...newNote };

        // Initialize version history using the snapshot
        newNote.versions = [
            {
                version: 1,
                note: noteSnapshot,
                timestamp
            }
        ];

        const notes = await readNotes();
        notes.push(newNote);
        await writeNotes(notes);
        return NextResponse.json({ note: newNote }, { status: 201 });
    } catch (error) {
        console.error("Error creating note:", error);
        return NextResponse.json({ error: 'Error creating note' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, categories, ...updates } = await request.json();
        const notes = await readNotes();
        const index = notes.findIndex(note => note.id === id);
        if (index === -1) {
            return NextResponse.json({ error: 'Note not found' }, { status: 404 });
        }

        // Check if an image is provided in updates and verify its size
        if (updates.image) {
            const imageSize = getBase64FileSize(updates.image);
            if (imageSize > MAX_IMAGE_SIZE) {
                return NextResponse.json(
                    { error: 'Image size exceeds the 5MB limit.' },
                    { status: 400 }
                );
            }
        }

        // Fetch existing categories
        let existingCategories = await readCategories();

        // Ensure categories is an array (default to empty array if none is provided)
        let updatedCategories = Array.isArray(categories) ? categories : notes[index].categories;

        // Ensure all new categories exist, if not, add them
        updatedCategories.forEach(cat => {
            if (!existingCategories.includes(cat)) {
                existingCategories.push(cat);
            }
        });

        await writeCategories(existingCategories); // Save updated category list


        const timestamp = getEATTimestamp();
        // Update metadata
        notes[index] = {
            ...notes[index],
            ...updates,
            categories: updatedCategories,
            updatedAt: timestamp,
            // Append to version history
            versions: [
                ...notes[index].versions,
                {
                    version: notes[index].versions.length + 1,
                    note: { ...updates, categories: updatedCategories },
                    timestamp
                }
            ]
        };

        await writeNotes(notes);
        return NextResponse.json({ note: notes[index] });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating note' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        let notes = await readNotes();
        const noteIndex = notes.findIndex(note => note.id === id);
        if (noteIndex === -1) {
            return NextResponse.json({ error: 'Note not found' }, { status: 404 });
        }

        // Soft delete: mark the note as deleted instead of removing it
        notes[noteIndex].isDeleted = true;
        notes[noteIndex].deletedAt = getEATTimestamp();

        // If the note is archived, remove its archived status
        if (notes[noteIndex].archived) {
            notes[noteIndex].archived = false;
            delete notes[noteIndex].archivedAt;
        }

        await writeNotes(notes);
        return NextResponse.json({ message: 'Note moved to bin (soft-deleted)' });
    } catch (error) {
        console.error("Error soft-deleting note:", error);
        return NextResponse.json({ error: 'Error deleting note' }, { status: 500 });
    }
}
