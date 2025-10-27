"use client";

import React, { useEffect } from 'react';
import { useNotes } from '../NotesContext';
import NoteListLayout from '../../components/NoteListLayout';
import { Box, Typography } from '@mui/material';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';

export default function ArchivePage() {
    const {
        archivedNotes,
        loading,
        error,
        fetchArchivedNotes
    } = useNotes();

    useEffect(() => {
        fetchArchivedNotes();
    }, [fetchArchivedNotes]);

    return (
        <Box sx={{ pl: 4.5 }}>
            {!loading && archivedNotes.length === 0 ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                    color: 'text.secondary'
                }}>
                    <ArchiveOutlined sx={{ fontSize: 64, mb: 2 }} />
                    <Typography variant="h6">
                        No notes in Archive
                    </Typography>
                </Box>
            ) : (
                <NoteListLayout
                    loading={loading}
                    error={error}
                    notes={archivedNotes}
                />
            )}
        </Box>
    );
}
