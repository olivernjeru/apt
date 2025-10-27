"use client"

import { Container, Box, Typography } from '@mui/material';
import { useNotes } from '../NotesContext';
import { useEffect } from 'react';
import NoteListLayout from '../../components/NoteListLayout';
import { NewNoteEditor } from './NoteEditor';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';

export default function Page() {
    const {
        notes,          // All notes from central storage
        fetchNotes,     // Function to load all notes
        loading,
        error
    } = useNotes();

    // Filter active notes directly from the central store
    const activeNotes = notes.filter(note =>
        !note.archived &&
        !note.isDeleted
    );

    // Initial fetch (only once when mounted)
    useEffect(() => {
        fetchNotes();
    }, []);  // Empty dependency array = run only once

    return (
        <Container maxWidth="xl" sx={{ py: 2 }}>
            <NewNoteEditor sx={{ mb: 4 }} />

            {!loading && activeNotes.length === 0 ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                    color: 'text.secondary'
                }}>
                    <DescriptionOutlined sx={{ fontSize: 64, mb: 2 }} />
                    <Typography variant="h6">
                        No notes found
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Create your first note using the editor above
                    </Typography>
                </Box>
            ) : (
                <NoteListLayout
                    notes={activeNotes}  // Use filtered notes
                    loading={loading}
                    error={error}
                />
            )}
        </Container>
    );
}
