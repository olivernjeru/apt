"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNotes } from "@/app/NotesContext";
import { NoteEditor } from "../NoteEditor";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();
    const { notes, fetchNotes, softDelete } = useNotes();

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    const note = notes.find((n) => String(n.id) === String(id));

    const handleDelete = async () => {
        await softDelete(id);
        router.push("/notes");
    };

    return (
        <Box sx={{ p: 2 }}>
            {note ? (
                <>
                    <NoteEditor
                        note={note}
                        mode="update"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            backgroundColor: note.backgroundColor?.[theme.palette.mode],
                            borderRadius: 2
                        }}
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            onClick={handleDelete}
                            variant="contained"
                            color="error"
                            sx={{ borderRadius: 2 }}
                        >
                            Move to Bin
                        </Button>
                    </Box>
                </>
            ) : (
                "Loading..."
            )}
        </Box>
    )
}
