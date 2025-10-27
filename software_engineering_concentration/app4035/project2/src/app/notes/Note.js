'use client';

import { memo } from 'react';
import { useNotes } from '../../app/NotesContext';
import { NoteListLayout } from '../../components/NoteListLayout';

export const Note = memo(function Note({ note }) {
    const { searchQuery } = useNotes();

    return (
        <NoteListLayout
            notes={[note]}
            loading={false}
            error={null}
            sx={{
                maxWidth: '800px',
                mx: 'auto',
                '& .MuiImageList-root': {
                    gridTemplateColumns: '1fr !important',
                    gap: '0 !important'
                }
            }}
        />
    );
});
