"use client";

import { createContext, useContext, useReducer, useCallback } from "react";

const initialState = {
    notes: [],
    archivedNotes: [],
    deletedNotes: [],
    categories: [],
    searchQuery: "",
    loading: false,
    categoriesLoading: false,
    error: null,
};

export const NotesContext = createContext();

function notesReducer(state, action) {
    switch (action.type) {
        case "MERGE_NOTES":
            const mergedNotes = action.payload.reduce((acc, newNote) => {
                const existingIndex = acc.findIndex(n => n.id === newNote.id);
                if (existingIndex > -1) {
                    acc[existingIndex] = newNote;
                } else {
                    acc.push(newNote);
                }
                return acc;
            }, [...state.notes]);

            return { ...state, notes: mergedNotes };
        case "REQUEST_START":
            return { ...state, loading: true, error: null };
        case "CATEGORIES_LOADING_START":
            return { ...state, categoriesLoading: true, error: null };
        case "SET_NOTES":
            return { ...state, notes: action.payload, loading: false };
        case "SET_ARCHIVED":
            return { ...state, archivedNotes: action.payload, loading: false };
        case "SET_DELETED":
            return { ...state, deletedNotes: action.payload, loading: false };
        case "SET_CATEGORIES":
            return { ...state, categories: action.payload, categoriesLoading: false };
        case "ADD_NOTE":
            return { ...state, notes: [...state.notes, action.payload], loading: false };
        case "UPDATE_NOTE":
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? { ...note, ...action.payload } : note
                ),
                loading: false,
            };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        case "REQUEST_FAILED":
            return { ...state, loading: false, error: action.payload };
        case "CATEGORIES_LOADING_FAILED":
            return { ...state, categoriesLoading: false, error: action.payload };
        default:
            return state;
    }
}

export function NotesProvider({ children }) {
    const [state, dispatch] = useReducer(notesReducer, initialState);

    const setLoading = (value) => dispatch({ type: "REQUEST_START", payload: value });

    // Fetch active notes (not archived and not soft-deleted)
    const fetchNotes = useCallback(async () => {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes");
            if (!response.ok) throw new Error("Failed to fetch active notes");
            const { notes } = await response.json();
            dispatch({ type: "SET_NOTES", payload: notes });
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error fetching active notes:", error);
        }
    }, []);

    // Fetch soft-deleted notes from the bin
    const fetchDeletedNotes = useCallback(async () => {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes/bin");
            if (!response.ok) throw new Error("Failed to fetch deleted notes");
            const { deletedNotes } = await response.json();
            dispatch({ type: "SET_DELETED", payload: deletedNotes });
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error fetching deleted notes:", error);
        }
    }, []); // Empty dependency array for stable reference

    // Fetch archived notes
    const fetchArchivedNotes = useCallback(async () => {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes/archive");
            if (!response.ok) throw new Error("Failed to fetch archived notes");
            const { archivedNotes } = await response.json();
            dispatch({ type: "SET_ARCHIVED", payload: archivedNotes });
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
        }
    }, []);

    const searchNotes = (notes, query) => {
        const lowerQuery = query.toLowerCase();

        return notes.filter(note => {
            const inTitle = note.title?.toLowerCase().includes(lowerQuery);
            const inContent = note.content?.toLowerCase().includes(lowerQuery);
            const inTags = note.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
            const inCategories = note.categories?.some(cat => cat.toLowerCase().includes(lowerQuery));

            return inTitle || inContent || inTags || inCategories;
        });
    };

    // Search active notes (using query parameter 'query')
    const searchActiveNotes = useCallback(async (query) => {
        try {
            const response = await fetch(`/api/notes/search/active?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Search failed');
            const { results } = await response.json();
            dispatch({ type: "SET_NOTES", payload: results });
        } catch (error) {
            console.error("Search error:", error);
        }
    }, []);

    const searchArchivedNotes = useCallback(async (query) => {
        try {
            const response = await fetch(`/api/notes/search/archived?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Search failed');
            const { results } = await response.json();
            dispatch({ type: "SET_ARCHIVED", payload: results });
        } catch (error) {
            console.error("Search error:", error);
        }
    }, []);

    const searchDeletedNotes = useCallback(async (query) => {
        try {
            const response = await fetch(`/api/notes/search/deleted?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Search failed');
            const { results } = await response.json();
            dispatch({ type: "SET_DELETED", payload: results });
        } catch (error) {
            console.error("Search error:", error);
        }
    }, []);

    // Set search query (local state)
    const setSearchQuery = useCallback((query) => {
        dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    }, []);

    // Add a new note (supports extended fields)
    async function addNote(noteData) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(noteData),
            });
            if (!response.ok) throw new Error("Failed to create note");
            const { note } = await response.json();
            dispatch({ type: "ADD_NOTE", payload: note });
            return note;
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error adding note:", error);
        }
    }

    // Update an existing note
    async function updateNote(noteData) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(noteData),
            });
            if (!response.ok) throw new Error("Failed to update note");
            const { note } = await response.json();
            dispatch({ type: "UPDATE_NOTE", payload: note });
            return note;
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error updating note:", error);
        }
    }

    // Soft delete a note (moves note to bin)
    async function deleteNote(id) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) throw new Error("Failed to delete note");
            // Re-fetch notes after successful deletion to update the state
            fetchNotes();
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error deleting note:", error);
        }
    }

    // Alias softDelete as deleteNote for clarity in UI components
    const softDelete = deleteNote;

    // Permanently delete a note
    async function permanentlyDeleteNote(id) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes/bin", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to delete note permanently");
            }

            // Optimistic update without re-fetching
            dispatch({
                type: "SET_DELETED",
                payload: state.deletedNotes.filter(note => note.id !== id)
            });
        } catch (error) {
            console.error("Deletion error:", error);
            dispatch({
                type: "REQUEST_FAILED",
                payload: error.message
            });
            // Re-fetch to sync state if error occurs
            fetchDeletedNotes();
        }
    }

    // Archive a note
    async function archiveNote(id) {
        try {
            const response = await fetch("/api/notes/archive", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) throw new Error("Failed to archive note");
            const { note } = await response.json();
            dispatch({ type: "MERGE_NOTES", payload: [note] });
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error archiving note:", error);
        }
    }

    // Restore an archived note
    async function restoreArchivedNote(id) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes/archive/restore", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) throw new Error("Failed to restore archived note");

            // Refresh both lists
            await fetchNotes();
            await fetchArchivedNotes();
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error restoring archived note:", error);
        }
    }

    // Restore a soft-deleted note from bin
    async function restoreDeletedNote(id) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/notes/bin/restore", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to restore note");
            }

            // Optimistic update for both lists
            dispatch({
                type: "UPDATE_NOTE",
                payload: {
                    id,
                    isDeleted: false,
                    deletedAt: null
                }
            });
            dispatch({
                type: "SET_DELETED",
                payload: state.deletedNotes.filter(note => note.id !== id)
            });
        } catch (error) {
            console.error("Restoration error:", error);
            dispatch({
                type: "REQUEST_FAILED",
                payload: error.message
            });
            // Re-fetch to sync state if error occurs
            fetchDeletedNotes();
        }
    }

    // CATEGORY FUNCTIONS
    const fetchCategories = useCallback(async () => {
        // Always fetch categories when this function is called explicitly
        dispatch({ type: "CATEGORIES_LOADING_START" });
        try {
            const response = await fetch("/api/categories/createCategories");
            if (!response.ok) throw new Error("Failed to fetch categories");
            const { categories } = await response.json();
            dispatch({ type: "SET_CATEGORIES", payload: categories });
        } catch (error) {
            dispatch({ type: "CATEGORIES_LOADING_FAILED", payload: error.message });
        }
    }, []); // Remove state.categories.length dependency

    async function createCategory(name) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/categories/createCategories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            });

            console.log("Category Create API Response Status:", response.status); // Log status
            
            if (!response.ok) {
                const errorText = await response.text(); // Get response text for logging
                console.error("Category Create API Error Response Text:", errorText);
                const errorData = JSON.parse(errorText || '{}'); // Try parsing error text
                console.error("Server error details (parsed):", errorData);
                throw new Error(errorData.error || `Failed to create category (status: ${response.status})`);
            }

            // If response IS ok:
            console.log("Category Create API Response OK. Attempting to parse JSON...");
            const data = await response.json(); // Parse JSON
            console.log("Category Create API Response JSON Parsed:", data); // Log parsed data
            
            if (!data || !Array.isArray(data.categories)) { // Validate parsed data format
                console.error("Parsed data is missing 'categories' array:", data);
                throw new Error("Invalid data format received from server");
            }

            const { categories } = data; // Destructure after validation

            console.log("Dispatching SET_CATEGORIES with payload:", categories);
            dispatch({ type: "SET_CATEGORIES", payload: categories });
            console.log("Dispatch complete. Returning true from createCategory.");
            return true; // Explicitly return true on success
        } catch (error) {
            dispatch({ type: "CATEGORIES_LOADING_FAILED", payload: error.message });
            console.error("Error in createCategory function:", error); // Log the caught error
            return false; // Explicitly return false on error
        }
    }

    async function updateCategory(oldName, newName) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/categories/createCategories", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ oldName, newName }),
            });
            if (!response.ok) throw new Error("Failed to update category");
            await fetchCategories();
            await fetchNotes();
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error updating category:", error);
        }
    }

    async function deleteCategory(name) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch("/api/categories/createCategories", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            });
            if (!response.ok) throw new Error("Failed to delete category");
            await fetchCategories();
            await fetchNotes();
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error deleting category:", error);
        }
    }

    async function sortNotesByCategory(category) {
        dispatch({ type: "REQUEST_START", payload: true });
        try {
            const response = await fetch(`/api/categories/sortByCategory?category=${category}`);
            if (!response.ok) throw new Error("Failed to sort notes by category");
            const { notes } = await response.json();
            dispatch({ type: "SET_NOTES", payload: notes });
        } catch (error) {
            dispatch({ type: "REQUEST_FAILED", payload: error.message });
            console.error("Error sorting notes by category:", error);
        }
    }

    return (
        <NotesContext.Provider
            value={{
                // State values
                searchQuery: state.searchQuery,
                notes: state.notes,
                archivedNotes: state.archivedNotes,
                deletedNotes: state.deletedNotes,
                categories: state.categories,
                loading: state.loading,
                categoriesLoading: state.categoriesLoading,
                error: state.error,

                // Functions
                setSearchQuery,
                fetchNotes,
                fetchDeletedNotes,
                fetchArchivedNotes,
                searchActiveNotes,
                searchArchivedNotes,
                searchDeletedNotes,
                addNote,
                updateNote,
                deleteNote,
                softDelete,
                archiveNote,
                restoreArchivedNote,
                restoreDeletedNote,
                permanentlyDeleteNote,
                fetchCategories,
                createCategory,
                updateCategory,
                deleteCategory,
                sortNotesByCategory,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error("useNotes must be used within a NotesProvider");
    }
    return context;
}
