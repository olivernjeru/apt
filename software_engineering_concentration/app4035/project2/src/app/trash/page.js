"use client"

import { useNotes } from '../NotesContext';
import { useEffect } from 'react';
import NoteListLayout from '../../components/NoteListLayout';
import { Box, Typography } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

export default function Page() {
    const {
        deletedNotes,
        fetchDeletedNotes,
        loading,
        error
    } = useNotes();

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                await fetchDeletedNotes();
            } catch (error) {
                if (!error.name === 'AbortError') {
                    console.error("Fetch error:", error);
                }
            }
        };
        fetchData();
        return () => controller.abort();
    }, []);

    return (
        <Box sx={{ pl: 4.5 }}>
            <Typography variant="body2" sx={{
                mb: 1,
                fontStyle: 'italic',
                textAlign: 'center'
            }}>
                Notes in Trash are deleted after 30 days.
            </Typography>

            {!loading && deletedNotes.length === 0 ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                    color: 'text.secondary'
                }}>
                    <DeleteOutlined sx={{ fontSize: 64, mb: 2 }} />
                    <Typography variant="h6">
                        No notes in Trash
                    </Typography>
                </Box>
            ) : (
                <NoteListLayout
                    notes={deletedNotes}
                    loading={loading}
                    error={error}
                />
            )}
        </Box>
    );
}
