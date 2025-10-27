import { NextResponse } from 'next/server';
import { readCategories, writeCategories } from '../../../../../database/categoriesHelper';
import { readNotes, writeNotes } from '../../../../../database/notesHelper';

//GET all categories
export async function GET() {
    const categories = await readCategories();
    return NextResponse.json({ categories });
}

//POST: Create a new category
export async function POST(request) {
    try {
        const { name } = await request.json();
        if (!name) {
            return NextResponse.json({ error: "Category name is required" }, { status: 400 });
        }

        const categories = await readCategories();

        // Check if the category already exists
        if (categories.includes(name)) {
            return NextResponse.json({ error: "Category already exists" }, { status: 400 });
        }

        categories.push(name);
        await writeCategories(categories);

        // Return the full updated list of categories
        return NextResponse.json({ categories: categories }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error creating category" }, { status: 500 });
    }
}

// DELETE: Remove a category and update notes
export async function DELETE(request) {
    try {
        const { name } = await request.json();
        let categories = await readCategories();

        // Check if the category exists
        if (!categories.includes(name)) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        // Remove the category from the list
        categories = categories.filter(category => category !== name);
        await writeCategories(categories);

        // Update all notes that have this category (set to "Uncategorized")
        let notes = await readNotes();
        notes = notes.map(note => ({
            ...note,
            categories: note.categories?.filter(cat => cat !== name) || []
        }));
        await writeNotes(notes);

        return NextResponse.json({ message: "Category deleted and notes updated" });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting category" }, { status: 500 });
    }
}



// UPDATE: Edit category name
export async function PUT(request) {
    try {
        const { oldName, newName } = await request.json();
        if (!oldName || !newName) {
            return NextResponse.json({ error: "Both old and new category names are required" }, { status: 400 });
        }

        let categories = await readCategories();

        // Check if the old category exists
        if (!categories.includes(oldName)) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        // Check if the new category name already exists
        if (categories.includes(newName)) {
            return NextResponse.json({ error: "Category name already exists" }, { status: 400 });
        }

        // Update the category name in the categories list
        categories = categories.map(category => category === oldName ? newName : category);
        await writeCategories(categories);

        // Now, update all notes that have this category
        let notes = await readNotes();
        notes = notes.map(note => ({
            ...note,
            categories: note.categories?.map(cat =>
                cat === oldName ? newName : cat
            ) || []
        }));

        await writeNotes(notes);

        return NextResponse.json({ message: "Category updated successfully", oldName, newName });
    } catch (error) {
        return NextResponse.json({ error: "Error updating category" }, { status: 500 });
    }
}
