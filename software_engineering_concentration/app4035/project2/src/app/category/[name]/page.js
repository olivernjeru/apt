"use client"

import { useParams } from "next/navigation";
import { Container, Typography, Box } from "@mui/material";
import { useNotes } from "@/app/NotesContext";
import { useEffect } from "react";
import NoteListLayout from "@/components/NoteListLayout";
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import LabelIcon from '@mui/icons-material/Label';

export default function Page() {
    const { name } = useParams();
    const { notes, fetchNotes, loading, error } = useNotes();

    useEffect(() => {
        fetchNotes();
    }, [name]);

    // Filter notes by category
    const categoryNotes = notes.filter(note => 
        note.categories?.map(cat => cat.toLowerCase()).includes(name.toLowerCase()) &&
        !note.archived &&
        !note.isDeleted
    );

    return (
        <Container maxWidth="xl" sx={{ pt: 1, pb: 3 }}>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pb: 2,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1
            }}>
                <LabelIcon color="action" />
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'medium' }}>
                    {name}
                </Typography>
            </Box>
            
            {!loading && categoryNotes.length === 0 ? (
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
                        No notes found in this category
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Create a new note and assign it to this category
                    </Typography>
                </Box>
            ) : (
                <NoteListLayout
                    notes={categoryNotes}
                    loading={loading}
                    error={error}
                />
            )}
        </Container>
    );
}